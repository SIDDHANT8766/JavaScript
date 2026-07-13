let para = document.querySelector("#para");

para.addEventListener("mouseover" , function(){
    para.style.backgroundColor = "yellow";
    para.style.color = "black";

});


para.addEventListener("mouseout" , function(){
    para.style.backgroundColor = "white";
});


// HTML of that js

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
            background-color: rgb(131, 205, 131);
        }

        #para{
                font-style: italic;
                background-color: white;
                padding: 40px;
                margin-top: 30px;
                color:brown;
                font-size: xx-large;
        }

        
    </style>
    
</head>
<body>

    <p id ="para">Lorem ipsum dolor sit, amet consectetur <br> adipisicing elit. Placeat, animi dolores?</p>
    
    <script src="mouseover.js"></script>

</body>
</html>
 */