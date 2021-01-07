// normally change images
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("hero-wrapper");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 3000);
}

// normally change background color

var bgColors = ['#2e6a3c','#f192ad','#e7643e'];

document.querySelector('#hero-bg').style.borderBottomColor = bgColors[Math.round(Math.random() * bgColors.length)];