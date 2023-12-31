// // alert("YOu are a genius of adaptability");
// var ab = document.querySelectorAll("button")[0];
// ab.addEventListener("click",alerts);
// function alerts(){
//     alert("You are blue1");
// };
// alert("Suthesh");
let n = document.querySelectorAll(".drum").length;
console.log(n);
for(let i=0;i<n;i++)
{
     let ab = document.querySelectorAll(".drum")[i].addEventListener("click", function (){
       alert("I got clicked");
     } );

     }
