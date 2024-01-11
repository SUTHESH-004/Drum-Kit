
let n = document.querySelectorAll(".drum").length;
// console.log(n);
for(var i=0;i<n;i++)
{
   var some;
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   // some=console.log(this.innerHtml);
   var c = this.innerHtml;
   addsound(c);
   });
   // var buttoninnerhtml = this.innerhtml;
   // makesound(buttoninnerhtml);
}

function addsound(s)
{
   switch(s){
   case "w":
      var w0 = new Audio("sounds/tom1-1.mp3");
      w0.play();
      break;
   case "a":
      var a0 = new Audio("sounds/tom-2.mp3");
      a0.play();
      break;
   case "s":
      var s0 = new Audio("sounds/tom-3.mp3");
      s0.play();
      break;
   case "d":
      var d0 = new Audio("sounds/tom-4.mp3");
      d0.play();
      break;
   case "j":
      var j0 = new Audio("sounds/crash.mp3");
      j0.play();
      break;
   case "k":
      var k0 = new Audio("sounds/snare.mp3");
      k0.play();
      break;
   case "l":
      var l0 = new Audio("sounds/kick-bass.mp3");
      l0.play();
      break;
   // default:console.log(s);
   }}