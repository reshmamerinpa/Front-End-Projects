/*var log = document.getElementsByClassName('header');
var count = log.length;

for(var i=0; i< count; i++){
 log[i].onclick = function(event){
    click(event);
 };
 }
  function click(event){
    document.querySelector('.login.active').classList.remove('active');
    event.target.classList.add('active');  
 } */

   //toggle   
   
   var reg = document.getElementsByClassName("register")[0];
   
   var login = document.getElementsByClassName("login")[0];
   reg.onclick = function()
   {        
  
    document.getElementsByClassName("container")[0].classList.add("active");  
   }

   login.onclick = function()
   {
   
    document.getElementsByClassName("container")[0].classList.remove("active");  
   }
