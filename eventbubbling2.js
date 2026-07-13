let ul = document.querySelector("ul");

ul.addEventListener("click", function(details){
    details.target.classList.toggle("lt");
});



// HTML of this js
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
            padding: 30px;
        }

        .lt{
            text-decoration: line-through;
        }

        
    </style>
    
</head>
<body>

    <ul>
        <li>apple</li>
        <li>guava</li>
        <li>grapes</li>
        <li>banana</li>
        <li>mango</li>
    </ul>
    
    <script src="eventbubbling2.js"></script>

</body>
</html>
 */