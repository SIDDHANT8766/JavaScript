let btn = document.querySelector("#btn");

let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
        fileinp.click();
});

fileinp.addEventListener("change", function(details){

    const file = details.target.files[0];       // we make seprate variable and 
                                                //  condition for (if we click cancel or the undefined means
                                                  //                  there is no name of file occurs in it )
    if(file)
    {
        btn.textContent = file.name;
    }
});


// HTML for this js 

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
            background-color: rgb(221, 248, 235);
        }

        #main
        {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
        } 

        input{
            display: none;
        }

        #btn{
            padding: 12px 25px;
            background-color: rgb(53, 173, 53);
            color: white;
            border-radius: 5px;
        }

        #btn:hover{
            background-color: rgb(28, 125, 28);
        }

       
    </style>
    
</head>
<body>

    <div id="main">
        <input id="fileinp" type="file">
        <div id="btn">
            Upload File
        </div>
    </div>
    
    
    <script src="Event7.js"></script>

</body>
</html>
*/
