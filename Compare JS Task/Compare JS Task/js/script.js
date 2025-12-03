// var mug =[mug1,mug2,mug3,mug4,mug5,mug6,mug7];
// var color= [color1,color2,color3,color4,color5,color6,color7];

// function randomImg(){
//     var randomNum = Math.floor((Math.random() * 7)+1); //random number between 1 to 7
//     var changenum = [];
//     changenum.push(changenum);
//     var changeimage = document.getElementsByClassName("changeimage")[0];
//     changeimage.src = "images/mug/"+randomNum+".svg";
//     console.log(randomNum);
// }

// To change image based on random numbers while clicking the numbers 
var nums = [1,2,3,4,5,6,7];
function getrandomNumber(list){
    return[...list].sort(() => Math.random() >0.5 ? 1 : -1).slice(0,7);
}
var ranNum = getrandomNumber(nums);
var i=0;
var changeimage = document.getElementsByClassName("changeimage")[0];
changeimage.src = "images/mug/"+ranNum[i]+".svg";

var ans = [];

var numclick = document.querySelectorAll(".number");
numclick.forEach(element => {
    element.onclick = function() {
        if(i < ranNum.length-1){
            var currentValue = this.getAttribute("value");
            ans.push(currentValue);
            console.log(ans);
            i++;
            changeimage.src = "images/mug/"+ranNum[i]+".svg";
            console.log(ranNum[i]);
            
        }else if(i < ranNum.length){
            var currentValue = this.getAttribute("value");
            ans.push(currentValue);
            console.log(ans);
            alert("next page");
        }   
    }
});

// console.log(getrandomNumber(nums));
console.log(ranNum);

// function randomImg(){
//     if(i < ranNum.length){
//         var changeimage = document.getElementsByClassName("changeimage")[0];
//         changeimage.src = "images/mug/"+ranNum[i]+".svg";
//         console.log(ranNum[i]);
//         i++;
//     }else{
//         alert("next page");
//     }
// }

// function norepeat(){
// var nums = [1,2,3,4,5,6,7,8,9,10];
//     ranNums = [];
//     i = nums.length;
//     j = 0;

// while (i--) {
//     j = Math.floor(Math.random() * (i+1));
//     ranNums.push(nums[j]);
//     nums.splice(j,1);
//     console.log(j);
// }
// }
// console.log(nums);
console.log(numclick);
