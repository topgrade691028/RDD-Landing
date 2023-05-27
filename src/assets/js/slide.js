var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n, slides, dots_, dots_active) {
  showSlides(slideIndex = n, slides, dots_, dots_active);
}

function showSlides(n, slides_, dots_, dots_active) {
  var i;
  var slides = document.getElementsByClassName(slides_);
  var dots = document.getElementsByClassName(dots_);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(dots_active, "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += dots_active;
}


