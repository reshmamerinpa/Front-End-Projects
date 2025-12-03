const slideImage = document.querySelectorAll(".options img");
var slideBtn = document.getElementsByClassName(".slide-btn")[0];
let currentImage = 0; 

slideImage[currentImage].style.opacity = 1;

setInterval(nextImage, 1000);

function nextImage() {
   slideImage[currentImage].style.opacity = 0;
   currentImage = (currentImage+1) % slideImage.length;
   slideImage[currentImage].style.opacity = 1;
 }
slide-btn.forEach(element => {

  element.addEventListener("click", function() {
 
  });
});
