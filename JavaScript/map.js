// map1 = L.map(map1).setView([50.8072, 2.4802], 10); // Initialiser avec une vue par défaut
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1);

        
// Initialiser la carte
var mapAccueil = L.map('map1').setView([46.603354, 1.888334], 6);

// Ajouter le fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapAccueil);

// // Charger le fichier GPX
var gpxLayer = new L.GPX('gpx/track.gpx', {
async: true,
marker_options: {
    startIconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    // startIconUrl: 'images/logo.png',
    endIconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png'
}
});

// Ajouter la couche GPX à la carte
gpxLayer.on('loaded', function (e) {
mapAccueil.fitBounds(e.target.getBounds());
});

gpxLayer.addTo(mapAccueil);