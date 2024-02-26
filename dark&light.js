//Slove the javascript question create the light and dark mood
const buttun=document.querySelector("button");
console.log(buttun);
let dark="light";
buttun.addEventListener("click",()=>{
  if(dark==="light"){
     dark="dark";
     document.querySelector("body").style.background="black";
     document.getElementById("para").style.color="white";
    
  }
  else{
    dark="light";
    document.querySelector("body").style.background="white";
    document.getElementById("para").style.color="black";
  }
  console.log(dark);
});

//  mouse hover and change the text color....

let paragraph = document.getElementById("paragraph");
console.log(paragraph);
let paragraph_1 = "paragraph";
paragraph.addEventListener("mouseover",()=>{
  if(paragraph_1 === "paragraph"){
     paragraph_1 = "Text color change will be pink";
    document.getElementById("paragraph").style.color="black";
  }
  else {
    paragraph_1 = "paragraph";
    document.getElementById("paragraph").style.color="green";
    document.getElementById("paragraph").style.fontSize="30px"; 
  }

});