let email = document.querySelector("#email");
let nam = document.querySelector("#username");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(details){

    details.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let ans1 = emailRegex.test(email.value);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let ans2 = passwordRegex.test(password.value);

    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    let ans3 = usernameRegex.test(nam.value)

    if (!ans1) 
    {
        document.querySelector("#emailError").textContent = "Incorrect Email ID";
    } 
    else
    {
        document.querySelector("#emailError").textContent = "";
    }

    if (!ans2) 
    {
        document.querySelector("#passwordError").textContent = "Incorrect Password";
    } 
    else 
    {
        document.querySelector("#passwordError").textContent = "";
    }

    if (!ans3) 
    {
        document.querySelector("#usernameError").textContent = "Incorrect username";
    } 
    else 
    {
        document.querySelector("#usernameError").textContent = "";
    }
});


