// Closure 
// encapusulation

function Demo()
{
    let click = 0;

    return function()
    {
        if(click < 5)
        {
            click++
            console.log(`clicked : ${click} times`)
        }
        else
        {
            console.error("Limit exeded, try after some time")
        }
    }
}

let Returnfunction = Demo();

Returnfunction();
Returnfunction();
Returnfunction();
Returnfunction();
Returnfunction();
Returnfunction(); // error show