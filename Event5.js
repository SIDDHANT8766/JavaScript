let inp = document.querySelector("select");

let devc = document.querySelector("#device");

inp.addEventListener("change",function(details){

   devc.textContent =`${details.target.value} Device Selected`;                        

                                            });