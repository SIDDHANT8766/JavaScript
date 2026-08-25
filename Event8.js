let form = document.querySelector("form");

let input = document.querySelectorAll("input")

let main = document.querySelector("#main");

form.addEventListener("submit", function(details){

    details.preventDefault();   // It is function to use for stoping form submission  

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    card.appendChild(profile)

    let img = document.createElement("img");
    img.setAttribute("src", input[0].value); 

    let h3 = document.createElement("h3");
    h3.textContent = input[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = input[2].value;

    let p = document.createElement("p");
    p.textContent = input[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    input.forEach(function(inp){
        if(inp.type !== "submit")
        {
            inp.value = "";
        }
    });
});

// HTML of that js

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,body
        {
            width: 100%;
            height: 100%;
            background-color: rgb(131, 205, 131);
        }

        #main
        {
            width: 100%;
            height: 100%;
            padding: 30px;
            
        } 

         input{
            display: block;
        }

        .card{
            max-width: 300px;
            color: white;
            margin-top: 40px;
            border-radius: 10px;
            padding: 30px;
            border: 1px solid #333;
            display: inline-block;
        }

        .card p {
            margin: 10px;
            font-size: 12px;
        }

        .card h5 {
            margin-top: 3px;
        }

        .profile{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-bottom: 7px;
            overflow: hidden;
        }

        .profile img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
       
    </style>
    
</head>
<body>



    <div id="main">
        <form action="">
            <input type="text" placeholder="profile pic">
            <input type="text" placeholder="name">
            <input type="text" placeholder="occupation">
            <input type="text" placeholder="info">
            <input type="submit">
        </form>

    </div>

    
    
    <script src="Event8.js"></script>

</body>
</html>


*/