// Closure 
// private counters

function Demo()
{
    let a = 0;

    return function()
    {
        a++
        console.log(a);
    }
}

let Returnfunction1 = Demo();

Returnfunction1();
Returnfunction1();
Returnfunction1();


let Returnfunction2 = Demo();

Returnfunction2();
Returnfunction2();
Returnfunction2();
Returnfunction2();
Returnfunction2();
Returnfunction2();