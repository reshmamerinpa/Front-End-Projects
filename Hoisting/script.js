//---------------------Let vs const-------------------
// console.log(b);
// console.log(a);

// let a = 10;
// const b = 20;


// var a = 10;
// console.log(a);

// var a;
// a= 20;
// console.log(a)


// let c;
// c= 30;
// console.log(c)



// ---------------------- Hoisting in Javascript-------------------//
// x = 7;

// function getName(){
//     console.log("Hai");
// }
// var x;
// getName();
// console.log(x);
// console.log(getName);


// ---------------------- undefined VS not defined------------------//


// console.log(5+5);
// // var a = 7;
// // console.log(x);


//----------------------- Closures ----------------------------------------

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
//-------------------------

function z(){
    var b= 900;
    function x(){
        var a =7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();