function setDarkLight()
{
    if(window.matchMedia("(prefer-color-sceme: dark)").matches)
    {
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    }
    else
    {    
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }

}


if(localStorage.getItem("theme"))
{
    document.body.classList.add(localStorage.getItem("theme"))
}
else
{
    setDarkLight();
}

window.matchMedia("(prefer-color-sceme: dark)").addEventListener("change", function(){

    if(localStorage.getItem("theme"))
    {
        setDarkLight();
    }
        
});

let btn = document.querySelector("#toggleBtn");

btn.addEventListener("click" , function(){

    if(document.body.classList.contains("dark"))
    {
        //document.body.classList.remove("null")
        document.body.classList.remove("dark")
        document.body.classList.add("light")

        localStorage.setItem("theme", "light")
    }
    else
    {
        //document.body.classList.remove("null")
        document.body.classList.add("dark")
        document.body.classList.remove("light")

        localStorage.setItem("theme", "dark")
    }

})

document.body.classList.add(localStorage.getItem("theme"))

