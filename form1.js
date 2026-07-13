let nm = document.querySelector("#name");

let form = document.querySelector("form");

form.addEventListener("submit", function(details){

    details.preventDefault();

    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

    let ans = usernameRegex.test(nm.value);
    console.log(ans);

});

// HTML for this js

//In this we cocer the inline things of HTML 
//Also we studied the "Regex"

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

        #hide{
            display: none;
            color: red;
            font-size: medium;
        }

        
    </style>
    
</head>
<body>
 
    <form>
            <!--  required minlength="3" maxlength="10" -->
            <!--  pattern = "[a-z]{3,8} required" -->

        <input id="name" type="text" placeholder="name">
        <div id="hide">
            <br>
            <small>Name should be max than 2 character</small>
        </div>
        
        <br><br>
        <input type="email" placeholder="email">
        <br><br>
        <input type="password" placeholder="password">
        <br><br>
       <select>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
       </select>
       <br><br>
       <textarea placeholder="Tell us about you"></textarea>
       <br><br>
       <input type="submit">
    </form>
    
    <script src="form1.js"></script>

</body>
</html>
 */