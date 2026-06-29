function factorial(num)
{
    let fact = 1;

    for(let i = 1; i <= num; i++)
    {
        fact = fact * i;
    }

    console.log("Factorial =", fact);
}

function main()
{
    let no = Number(prompt("Enter number : "));
    factorial(no);
}

main();