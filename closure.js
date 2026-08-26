// Closure 

function Demo()
{
    let a = 11;

    return function()
    {
        console.log(a);
    }
}

let Returnfunction = Demo();

Returnfunction();