let iCount = 11;

let interval = setInterval(function(){

    if(iCount >= 1)
    {
        iCount--;
        console.log(iCount);
    }
    else
    {
        clearInterval(interval);
    }

}, 1000);