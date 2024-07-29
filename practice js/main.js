// document.querySelector("button").addEventListener("click",dark);
// let flag = 0;

// function dark(){
//     if (flag == 0){
//         document.querySelector("body").style.backgroundColor="black";
//         document.querySelector("h1").style.color = "white";
//         flag = 1;
//     }
//     else{
//         document.querySelector("body").style.backgroundColor="white";
//             document.querySelector("h1").style.color = "black";
//             flag = 0;
//     }
// }
let flag = 0;
document.querySelector(".circle").addEventListener("click",dark);
function dark(){
    if(flag == 0){
        document.querySelector("body").style.backgroundColor="rgb(70, 67, 67)";
        document.querySelector("h1").style.color = "white";
        document.querySelector(".circle").style.border = "2px solid white";
        document.querySelector(".box1").style.backgroundColor = "white";
        document.querySelector(".box2").style.backgroundColor = "black";
        flag = 1;
    }
    else{
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("h1").style.color = "black";
        document.querySelector(".circle").style.border = "2px solid black";
        document.querySelector(".box1").style.backgroundColor = "black";
        flag = 0;
    }
    
}