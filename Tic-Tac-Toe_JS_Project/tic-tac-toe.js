
var move = "O";

//-----function to get value x or o-----
function xoo(button) {
    if (move =="X") {
    move ="O";
    //---pass o value to setmove function----
    setmove(button, move );
    }
    else if (move =="O") {
    move ="X";
    //---pass x value to setmove function----
    setmove(button, move );
    }
    }

    function setmove(x, move ) {
         if (x==1) {
         var button = document.getElementById("1");
         button.value = move ;
         //--disable after selecting--
         button.disabled=true;
         }
         else if (x==2) {
         var button = document.getElementById("2");
         button.value = move ;
         button.disabled=true;
         }
         else if (x==3) {
         var button = document.getElementById("3");
         button.value = move ;
         button.disabled=true;
         }
         else if (x==4) {
         var button = document.getElementById("4");
         button.value = move ;
         button.disabled=true;
         }
         else if (x==5) {
         var button = document.getElementById("5");
         button.value = move ;
         button.disabled=true;
         }
         else if (x==6) {
         var button = document.getElementById("6");
         button.value = move ;
         button.disabled=true;
         }
         else if (x==7) {
         var button = document.getElementById("7");
         button.value = move ;
         button.disabled=true;
         }
         else if (x==8) {
         var button = document.getElementById("8");
         button.value = move ;
         button.disabled=true;
         }
         else if (x==9) {
         var button = document.getElementById("9");
         button.value = move ;
         button.disabled=true;
         }
         play();
         }

       //---function to select the winner-----
         function play() {

             var b1 = document.getElementById("1").value;
             var b2 = document.getElementById("2").value;
             var b3 = document.getElementById("3").value;
             var b4 = document.getElementById("4").value;
             var b5 = document.getElementById("5").value;
             var b6 = document.getElementById("6").value;
             var b7 = document.getElementById("7").value;
             var b8 = document.getElementById("8").value;
             var b9 = document.getElementById("9").value;


             if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
                 winner(b1);
             }

             else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
               winner(b1);
             }

             else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
               winner(b9);
             }

             else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
               winner(b9);
             }

             else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
               winner(b4);
             }

             else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
               winner(b2);
             }

             else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
               winner(b1);
             }

             else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
             winner(b7);
             }

             }

             function winner(gewinner) {

                   buttondisable();

                   alert(gewinner + " won");

             }

             function buttondisable() {
                 var b1 = document.getElementById("1");
                 var b2 = document.getElementById("2");
                 var b3 = document.getElementById("3");
                 var b4 = document.getElementById("4");
                 var b5 = document.getElementById("5");
                 var b6 = document.getElementById("6");
                 var b7 = document.getElementById("7");
                 var b8 = document.getElementById("8");
                 var b9 = document.getElementById("9");

                 b1.disabled = true;
                 b2.disabled = true;
                 b3.disabled = true;
                 b4.disabled = true;
                 b5.disabled = true;
                 b6.disabled = true;
                 b7.disabled = true;
                 b8.disabled = true;
                 b9.disabled = true;
             }

function reset() {
    var b1 = document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    var b6 = document.getElementById("6");
    var b7 = document.getElementById("7");
    var b8 = document.getElementById("8");
    var b9 = document.getElementById("9");

    b1.value="";
    b2.value="";
    b3.value="";
    b4.value="";
    b5.value="";
    b6.value="";
    b7.value="";
    b8.value="";
    b9.value="";
    b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;
    b4.disabled=false;
    b5.disabled=false;
    b6.disabled=false;
    b7.disabled=false;
    b8.disabled=false;
    b9.disabled=false;
}
