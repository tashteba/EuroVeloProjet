// fetch('http://85.169.220.243:5006/api/trajets/')
//   .then(response => response.json())
//   .then(data => {
//     const avisData = data.data; // Accéder au tableau de données dans la clé "data"

//     // ttt des données, on parcours le tableau avec la fonction map

//     const avisElements = avisData.map(trajet => {
//       const id = trajet.id;
//       const type = trajet.attributes.type;
//       const name = trajet.attributes.nomVille;
//       const habitude = trajet.attributes.habitude;
//       const description = trajet.attributes.description;
//       const image_url = trajet.attributes.image_url;
      
 

//       // utilisation des variables pour construire l'html

//       return `

      
//       <div class="containerBox">
//       <div id="photoSecondSide"><img src=${image_url} alt="" class="imgCardGps"></div>
//       <div class="contenuSecondSlid">
//           <div id="jeunContenuSecondSlide">${type}</div>
//           <div id="petitTitreContenuSecondSlide">${habitude}</div>
//           <div id="titreContenuSecondSlide">${name}</div>
//           <div id="paraghraphSecondSlide">${description}</div>

//       </div> 
//       </div>   
      
      
//         `;
//     });

//     const avisContainer = document.getElementById('secondSide');
//     avisContainer.innerHTML = avisElements.join('');
//   })
//   .catch(error => {
//     console.error(error);
//   });

// import L from 'leaflet';
// import 'leaflet-gpx';

// Fonction pour charger la carte par défaut avec un tracé GPX par défaut
function loadDefaultMap() {
    const mapContainer = document.getElementById('map');
    let map = mapContainer.map;
    if (!map) {
      map = L.map('map').setView([46.603354, 1.888334], 6); // Utilisez les coordonnées et le niveau de zoom souhaités
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);
  
      mapContainer.map = map; // Stocker la référence de la carte dans l'élément HTML pour une utilisation ultérieure
  
      const defaultGpxUrl = 'gpx/track.gpx'; // Remplacez par l'URL du tracé GPX par défaut 
      loadGPX(defaultGpxUrl, map);
    }
  }
  
  // Fonction pour charger le tracé GPX
  function loadGPX(url, map) {
    // Supprimer les anciennes couches GPX
    if (map.gpxLayer) {
      map.removeLayer(map.gpxLayer);
    }
  
    fetch(url)
      .then(response => response.text())
      .then(gpxData => {
        const gpxLayer = new L.GPX(gpxData, {
          async: true,
          marker_options: {
            startIconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
            endIconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
            shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
          },
        }).on('loaded', function () {
          map.fitBounds(gpxLayer.getBounds());
        }).addTo(map);
  
        map.gpxLayer = gpxLayer; // Stocker la référence de la couche GPX dans la carte pour une utilisation ultérieure
      })
      .catch(error => {
        console.error('Erreur lors du chargement');
      });
  }
  
  fetch('http://85.169.220.243:5006/api/trajets/')
    .then(response => response.json())
    .then(data => {
      const trajetData = data.data; // Accéder au tableau de données dans la clé "data"
  
      // Traitement des données, parcours du tableau avec la fonction map
      const trajetElements = trajetData.map(trajet => {
              const id = trajet.id;
              const type = trajet.attributes.type;
              const name = trajet.attributes.nomVille;
              const habitude = trajet.attributes.habitude;
              const description = trajet.attributes.description;
              const image_url = trajet.attributes.image_url;
              const gpx_url = trajet.attributes.url_gpx;

        // Utilisation des variables pour construire le code HTML
        return `

        <div class="containerBox" data-gpx="${gpx_url}">
              <div id="photoSecondSide"><img src=${image_url} alt="" class="imgCardGps"></div>
              <div class="contenuSecondSlid">
                  <div id="jeunContenuSecondSlide">${type}</div>
                  <div id="petitTitreContenuSecondSlide">${habitude}</div>
                  <div id="titreContenuSecondSlide">${name}</div>
                  <div id="paraghraphSecondSlide">${description}</div>
        
              </div> 
              </div>   
         
        `;
      });
  
      const itineraireContainer = document.getElementById('secondSide');
      itineraireContainer.innerHTML = trajetElements.join('');
  
      // Ajout du gestionnaire d'événements pour charger le tracé GPX
      const figures = document.querySelectorAll('.containerBox');//
      figures.forEach(figure => {
        figure.addEventListener('click', () => {
          const gpx_url = figure.getAttribute('data-gpx');
          const mapContainer = document.getElementById('map');
          let map = mapContainer.map;
          if (!map) {
            map = L.map('map').setView([46.603354, 1.888334], 6); // Utilisez les coordonnées et le niveau de zoom souhaités
  
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
              maxZoom: 18,
            }).addTo(map);
  
            mapContainer.map = map; // Stocker la référence de la carte dans l'élément HTML pour une utilisation ultérieure
          }
  
          loadGPX(gpx_url, map);
        });
      });
  
      // Ajout du gestionnaire d'événements pour afficher la carte par défaut lorsque vous cliquez n'importe où
      document.addEventListener('click', () => {
        loadDefaultMap();
      });
    })
    .catch(error => {
      console.error(error);
    });
  
  // Chargement de la carte par défaut au chargement de la page
  loadDefaultMap();
  