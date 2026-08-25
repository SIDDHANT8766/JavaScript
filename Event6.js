let h1 = document.querySelector("#h1")

window.addEventListener("keydown",function(details){

   if(details.key === " ")
   {
      h1.textContent = "Space";
   }
   else
   {
      h1.textContent = details.key;
   }

});

/// HTML of this js

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
            background-color: beige;
        }

        #main
        {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }

        h1{
            color: );
            font-size: 10rem;
            font-weight: 50;
        }
    </style>
    
</head>
<body>

    <div id="main">
        <h1 id = "h1">A</h1>
    </div>
    
    
    <script src="Event6.js"></script>

</body>
</html>

*/