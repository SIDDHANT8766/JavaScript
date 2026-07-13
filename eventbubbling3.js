let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    console.log("button clicked");
})

c.addEventListener("click", function(){
    console.log("c clicked");
})

b.addEventListener("click", function(){
    console.log("b clicked");
})

a.addEventListener("click", function(){
    console.log("a clicked");
})


/**
 * HTML  of this js
 

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

        #a{
            width: 80%;
            height: 80%;
            background-color: red;
        }

        #b{
            width: 80%;
            height: 80%;
            background-color: green;
        }

        #c{
            width: 80%;
            height: 80%;
            background-color: brown;
        }

        
    </style>
    
</head>
<body>

    
    <div id="a">
        <div id="b">
            <div id="c">
                <button id="btn">Click Me</button>
            </div>
        </div>
    </div>
    
    <script src="eventbubbling3.js"></script>

</body>
</html>
 */