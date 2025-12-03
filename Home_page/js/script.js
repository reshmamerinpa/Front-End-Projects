const slideImage = document.querySelectorAll(".options img");
var slideBtn = document.querySelectorAll(".slide-btn");
var button =document.querySelectorAll(".slider-button");
var currentImage= 0; 
var lastImage = 0;

slideImage[currentImage].style.opacity = 1;

var timer = setInterval(nextImage, 2000);

function nextImage()
{
   if(currentImage != lastImage)
   {
      slideImage[lastImage].style.opacity = 0;
      slideBtn[lastImage].classList.remove("active");
     
   }
   if(currentImage < slideImage.length)
   {
      slideImage[currentImage].style.opacity = 1;
      slideBtn[currentImage].classList.add("active");
      lastImage = currentImage;
      currentImage++;
   }
   else 
   {
      currentImage = 0;
      slideImage[currentImage].style.opacity = 1;
      slideBtn[currentImage].classList.add("active");
      lastImage = currentImage;
      currentImage++;
   }
}
slideBtn.forEach(element => {
    element.addEventListener("click", buttonClick);
 });

function buttonClick()
{
    var number = this.getAttribute("data-number");
    currentImage = number;
    nextImage();
  //slideImage[currentImage].style.opacity = 0;
  //slideImage[number].style.opacity = 1; 
}
var pause = document.getElementsByClassName("pause")[0];
var play = document.getElementsByClassName("play")[0];
pause.addEventListener("click",function(){
 
   document.getElementsByClassName("pause-btn")[0].classList.add("active1");
   clearInterval(timer);
   
 
});

play.addEventListener("click",function(){
   document.getElementsByClassName("pause-btn")[0].classList.remove("active1");
   timer = setInterval(nextImage,2000);
});

