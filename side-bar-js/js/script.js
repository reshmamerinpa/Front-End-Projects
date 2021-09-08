function toggleFunction(){
    var sideToggle=document.getElementById("side-bar");
        sideToggle.classList.toggle("side-toggle");
}
let navigation = document.querySelectorAll(".nav-item");
navigation.forEach(navilink =>{
    navilink.onclick=function(){
        navigation.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    }
});

// function addbox(){
//     var box_div = document.createElement('div');
//     box_div.className="box";
//     box_div.innerHTML='<i class="far fa-times-circle"></i>';
//     document.getElementById("box-container").appendChild(box_div);
//     let delicons = document.querySelectorAll(".fa-times-circle");
//     delicons.forEach(uniqueicon =>{
//         uniqueicon.onclick = function(){
//             this.parentNode.remove();
//         }
//     });
// };

function addbox(){
    var BoxCount = document.getElementById("boxcount").value;
    if(BoxCount > 5){
        alert("More than 5 boxes are not allowed at a time");
    }else{
        for(var i = 1; i<=BoxCount; i++){
            var box_div = document.createElement('div');
                if(document.getElementById("color_yellow").checked){
                    box_div.classList.add("bg_yellow", "box");
                }else{
                    box_div.className="box";
                }
            box_div.innerHTML='<i class="far fa-times-circle"></i>';
            document.getElementById("box-container").appendChild(box_div);
            let delicons = document.querySelectorAll(".fa-times-circle");
            delicons.forEach(uniqueicon =>{
                uniqueicon.onclick = function(){
                    this.parentNode.remove();
                }
            });
        }
    }
};
/*function addbox(){
    var box_div = document.createElement('div');
    box_div.className="box";
    document.getElementById("box-container").appendChild(box_div);
    var closeicon = document.createElement("i");
    closeicon.classList.add("far","fa-times-circle");
    box_div.appendChild(closeicon).onclick = function(){
        this.parentNode.remove();
   };  
}*/

let boxdiv = document.querySelectorAll(".box");
let delicons = document.querySelectorAll(".fa-times-circle");
delicons.forEach(uniqueicon =>{
    uniqueicon.onclick = function(){
         this.parentNode.remove();
    }
});









  // this.parentElement.style.display = 'none';
        // this.closest("div").remove();
// });
// for (var i=0;i< navigation.length;i++){
// navigation[i].addEventListener("click",function(){
//     var findclass =document.querySelectorAll(".active");
//     findclass.classList.remove("active");
//     this.classList.add("active");
// })
// }
// let navigation = document.querySelectorAll(".nav-item");
// function navactive(x){
//     navigation.forEach(btn => btn.classList.remove("active"));
//     x.classList.add("active");
//     }
