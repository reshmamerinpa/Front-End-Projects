// xml http request   
var xhr =  new XMLHttpRequest();
xhr.open("get","https://jsonplaceholder.typicode.com/users")
// xhr.send();

xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    
}