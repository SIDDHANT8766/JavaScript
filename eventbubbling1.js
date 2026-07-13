document.querySelector("#nav").addEventListener("click" , function(){
    alert("clicked")
})                

// Keep remember it , how the bubbling works
 // -->  It will check the parent have event listener itslef not,
 //         It check until the parents end (header HTML tag). 



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
        }

        #main{
            width: 100%;
            height: 100%; 
            background-color: #514c42;
        }

        #nav{
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 100px;
            background-color: #fdfcfc
        }

        a{
            color: blue;
        }

        button{
            padding: 12px 22px;
            background-color: red;
            border-radius: 5px;
            border: none;
            font-size: 600;
            font-weight:20px;
        }

        
    </style>
    
</head>
<body>

    <div id="main">
        <div id="nav">
            <a href="">home</a><a href="">about</a>
            <button>click and follow</button>
        </div>
       
    </div>
    
    <script src="eventbubbling.js"></script>

</body>
</html>

  */