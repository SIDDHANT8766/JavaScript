let count = 0;
let progress = document.querySelector(".progress");
let p = document.querySelector("p");

let intv = setInterval(function(){

        if(count <= 99)
        {
            count++;
            progress.style.width = `${count}%`;
            p.textContent = `${count}%`;
        }
        else
        {
            document.querySelector("h2").textContent = "Downloaded."; 
        }

        clearInterval(intv);

}, 30)



// HTML for this js

/**
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Download Progress</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:linear-gradient(135deg,#6c63ff,#48c6ef);
}

.card{
    width:300px;
    padding:25px;
    border-radius:15px;
    background:rgba(255,255,255,0.15);
    backdrop-filter:blur(10px);
    border:1px solid rgba(255,255,255,0.3);
    text-align:center;
    color:white;
}

.progress-bar{
    width:100%;
    height:12px;
    background:rgba(255,255,255,0.3);
    border-radius:20px;
    overflow:hidden;
    margin:20px 0;
}

.progress{
    width:90%;
    height:100%;
    background:white;
    border-radius:20px;
}

p{
    font-size:18px;
    font-weight:bold;
}
</style>

</head>
<body>

<div class="card">
    <h2>Downloading...</h2>

    <div class="progress-bar">
        <div class="progress"></div>
    </div>

    <p>90%</p>
</div>

<script src="Timers3.js"></script>

</body>
</html>

 */