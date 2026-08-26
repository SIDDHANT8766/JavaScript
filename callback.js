function Caller(Callbackfunc)
{
    setTimeout(Callbackfunc, 5000);
}


Caller(function()
{
    console.log("Hii")
});