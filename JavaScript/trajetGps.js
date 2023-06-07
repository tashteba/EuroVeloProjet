// for bringing information from the database








// async function fetchTrajet() {
//     const r = await fetch("http://85.169.220.243:5006/api/trajets/");
//     if (r.ok === true) {
//       const response = await r.json();
//       return response.data; // Access the 'data' property
//     }
//     throw new Error("Impossible de connecter le serveur");
//   }
  
//   async function showTrajets() {
//     const trajets = await fetchTrajet();
//     console.log(trajets);
//     if (trajets.length > 0) {
//       const type = document.getElementById("jeunContenuSecondSlide");
//       const habitude = document.getElementById("petitTitreContenuSecondSlide");
//       const nomVille = document.getElementById("titreContenuSecondSlide");
//       const description = document.getElementById("paraghraphSecondSlide");
//       const image = document.getElementById("photoSecondSide");
  
//       type.innerText = trajets[0].attributes.type; // Access the 'type' property within 'attributes'
//       habitude.innerText = trajets[0].attributes.habitude; // Access the 'habitude' property within 'attributes'
//       nomVille.innerText = trajets[0].attributes.nomVille; // Access the 'nomVille' property within 'attributes'
//       description.innerText = trajets[0].attributes.description; // Access the 'description' property within 'attributes'
//       image.innerHTML = `<img src="${trajets[0].attributes.image}" alt="" class="imgCardGps">`; // Access the 'image' property within 'attributes'
//     } else {
//       console.error("No trajets found.");
//     }
//   }
  
//   showTrajets();
  
  



