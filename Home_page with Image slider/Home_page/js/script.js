const slideImage = document.querySelectorAll(".options img");
var slideBtn = document.querySelectorAll(".slide-btn");
var button =document.querySelectorAll(".slider-button");
let currentImage= 0; 

slideImage[currentImage].style.opacity = 1;

setInterval(nextImage, 3000);

function nextImage()
{
   slideImage[currentImage].style.opacity = 0;
   slideBtn[currentImage].classList.remove("active");
   currentImage++;
   if(currentImage < slideImage.length)
   {
      slideImage[currentImage].style.opacity = 1;
      slideBtn[currentImage].classList.add("active");
   }
   else 
   {
      currentImage = 0;
      slideImage[currentImage].style.opacity = 1;
      slideBtn[currentImage].classList.add("active");
   }
}
slideBtn.forEach(element => {
    element.addEventListener("click", buttonClick);
 });

function buttonClick()
{
   var number = this.getAttribute("data-number");
   slideImage[currentImage].style.opacity = 0;
   slideImage[number].style.opacity = 1; 
}


