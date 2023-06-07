// Slider is here
const slide = ['calais_1.png','calais_2.jpg','lens_1.jpg','lens_2.jpg','lille_1.jpg','lille_2.jpg','marais_audomarois_1.jpg','marais_audomarois_2.jpg','marais_audomarois_3.jpg'];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
   document.getElementById('slide').src = 'images/Caroussel/' + slide [numero];
}

setInterval("ChangeSlide (1)", 4000)

// know more is here

function knowMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Lire plus"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Lire Moins"; 
      moreText.style.display = "inline";
      btnText.style.display = "none";
    }
  }




