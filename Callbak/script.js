


// function x(y){
//     console.log("x")
//     y();
// }


// x(function y(){
//      console.log("y");
// });


// ---------------------------------


// setTimeout(function(){
//     console.log("timer");
// },3000)

// function x(y){
//     console.log("x")
//     y();
// }


// x(function y(){
//      console.log("y");
// });


// function fetchData(callback) {
//   setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       callback(data); // Call the callback function with the fetched data
//   }, 2000); // Simulate an API call with a 2-second delay
// }

// function processData(data) {
//   console.log(`Name: ${data.name}\n Age: ${data.age}`);
// }

// // Using the callback
// fetchData(processData);


const promise = new Promise((resolve,reject) =>{
  setTimeout(() => {
    resolve("Succes!");
  },1000)
});

promise.then((response)=> {
  console.log(response);
})