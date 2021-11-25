var slideIndex = 1;
showSlides(slideIndex);

var pressed = false;
// Next/previous controls
function plusSlides() {
  showSlides(slideIndex += 1);
  if(slideIndex == 6){
    slideIndex = 0;
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

setInterval(function() {
  console.log(slideIndex)
  plusSlides(slideIndex);
}, 4000);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  slides[slideIndex-1].style.flexDirection = "column";
  slides[slideIndex-1].style.justifyContent = "center";
  slides[slideIndex-1].style.gap = "25px";
  dots[slideIndex-1].className += " active";
}

