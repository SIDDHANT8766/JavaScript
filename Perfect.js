function checkPerfect(num)
{
    let sum = 0;

    for(let i = 1; i < num; i++)
    {
        if(num % i === 0)
        {
            sum = sum + i;
        }
    }

    if(sum === num)
    {
        console.log("Perfect Number");
    }
    else
    {
        console.log("Not Perfect Number");
    }
}

function main()
{
    let no = Number(prompt("Enter number : "));
    checkPerfect(no);
}

main();