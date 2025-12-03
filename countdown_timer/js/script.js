var start = document.getElementsByClassName("start")[0];
var pause = document.getElementsByClassName("pause")[0];
var resume = document.getElementsByClassName("resume")[0];
var stop = document.getElementsByClassName("stop")[0];

var hour = document.getElementsByClassName("hour")[0];
var minute = document.getElementsByClassName("minute")[0];
var second = document.getElementsByClassName("second")[0];


var startTimer = null;

function timer() {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
        //document.getElementsByClassName('message')[0].innerHTML ="countdown ends"; 
    } else if (second.value != 0) {
        second.value--;
    } else if (minute.value != 0 && second.value == 0) {
        second.value = 59;
        minute.value--;

    } else if (hour.value != 0 && minute.value == 0) {
        minute.value = 60;
        hour.value--;
    }

 
}

start.addEventListener("click", function() {
   
    function countDown() {
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    countDown();
});

pause.addEventListener("click",function(){
    if(hour.value != 0 || minute.value != 0 || second.value != 0){
    document.getElementsByClassName("button")[0].classList.add("active");
    clearInterval(startTimer);
    }
  
});
resume.addEventListener("click",function(){
    document.getElementsByClassName("button")[0].classList.remove("active");
    startTimer = setInterval(function() {
        timer();
    }, 1000);
});

stop.addEventListener("click",function() {
    
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    clearInterval(startTimer);
});