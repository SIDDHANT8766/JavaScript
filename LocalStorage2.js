//////////////////////////////////////////////////////////////

localStorage.setItem("names", JSON.stringify(["sid", "snk", "ank", "yas"]));  // set array as string
                               ////////////

let arr = JSON.parse(localStorage.getItem("names"));  // To get array return 
           ////////

console.log(arr);