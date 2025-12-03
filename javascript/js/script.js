
var mugImage = document.getElementsByClassName("mug-img");
var count = mugImage.length;
var question=[];
var next = document.getElementsByClassName("next-button")[0];
next.onclick = function()
{        

document.getElementsByClassName("container")[0].classList.add("active"); 

showCup();
}
var randomNumber = null;
var countCycle = 0;
function showCup()
{
  randomNumber = Math.floor((Math.random() * count) + 1);
 // console.log(randomNumber);
    if(question.includes(randomNumber))
    {
     
      if(countCycle < 7)
      {
        showCup();
      }
    }
    else
    {
      document.getElementsByClassName("question-mug")[0].innerHTML = '<img src="./images/'+randomNumber+'.svg" />';
      question.push(randomNumber);
      //console.log(randomNumber);
      countCycle++;
        
    }

}
var answer = [];
var markValue = document.querySelectorAll(".mark-value");
markValue.forEach(element =>{
//var number = element.getAttribute("data-number");
  // element.onclick = buttonClick(number);
  
element.addEventListener("click", buttonClick);  
 
});
function buttonClick()
{
  var number = this.getAttribute("data-number");
  answer.push(number);
  //console.log(number);
  console.log()
  if(countCycle < 7)
  {
    showCup();
  }

}