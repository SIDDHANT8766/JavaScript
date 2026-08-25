
let iValue = document.createElement("h1");
iValue.textContent = "Tula pn Hii";
let div = document.querySelector("div");     // We can write it in 
div.prepend(iValue);                         //       single line as the below



/*
OR 

document.querySelector("div").prepend(iValue);
   
 */