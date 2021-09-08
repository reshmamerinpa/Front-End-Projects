
  /*function myFunction() {
   document.getElementsByClassName("bottom-section")[0].classList.toggle("collapsed");
 }*/

/*document.getElementsByClassName("menu")[0].addEventListener("click", function1);  
function function1() {  
    document.getElementsByClassName("bottom-section")[0].classList.toggle("collapsed");
}*/  

//toggle
 document.getElementsByClassName("menu")[0].onclick = function()
  {
   myFunction()
  };
 function myFunction()
  {
    document.getElementsByClassName("bottom-section")[0].classList.toggle("collapsed");
  }
//active class
  var menuElement = document.getElementsByClassName('list-item');
var count = menuElement.length;

for(var i=0; i< count; i++)
 {
  menuElement[i].onclick = function(event)
  {
    clickEvent(event);
  };
 }
  function clickEvent(event){
    document.querySelector('.list-item.active').classList.remove('active');
    event.target.classList.add('active');
 }

//adding new element
var btnAdd = document.querySelector(".btn");
var contentSection = document.getElementsByClassName("content-section")[0];

//btnAdd.addEventListener("click" , function3);
btnAdd.onclick= function(){
    addElement();
}
function addElement(){
  var newDiv =document.createElement('div');
  newDiv.classList.add('content');
  contentSection.appendChild(newDiv);
}


