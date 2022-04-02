/*let slideIndex = 1;
showDivs(slideIndex);

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("forget-me-nots");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

/* let slideIndex = 0;
const slides = document.querySelectorAll('.forget-me-nots');
showDivs(slideIndex);

function plusDivs(num) {
  showDivs(slideIndex+num);
}

function showDivs(n) {
  slideIndex = (n+slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('hide',i!==slideIndex))
} */
