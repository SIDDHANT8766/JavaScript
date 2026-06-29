function checkPrime(num)
{
    let count = 0;

    for(let i = 1; i <= num; i++)
    {
        if(num % i === 0)
        {
            count++;
        }
    }

    if(count === 2)
    {
        console.log("Prime Number");
    }
    else
    {
        console.log("Not Prime Number");
    }
}

function main()
{
    let no = Number(prompt("Enter number : "));
    checkPrime(no);
}

main();