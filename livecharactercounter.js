let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(){
    let left = 20 - inp.value.length;

    span.textContent = left;

    if(left < 0)
    {
        span.style.color = "red";
    }
    else
    {
        span.style.color = "black";  
    }
});

/// HTML of this js

/**
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
            background-color:rgb(255, 255, 255);
            padding: 30px;
        }

        
    </style>
    
</head>
<body>
 
    <input type="text" placeholder="Write anything">
    
    <h1>Total Cahracters : <span></span></h1>
    
    
    <script src="livecharactercounter.js"></script>

</body>
</html>
 */