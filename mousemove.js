let abcd = document.querySelector("#abcd");

window.addEventListener("mousemove", function(details){

    abcd.style.top = details.clientY + "px";    
    abcd.style.left = details.clientX + "px";    
});