function checkOddEven(num)
{
    if(num % 2 === 0)
    {
        console.log("Even Number");
    }
    else
    {
        console.log("Odd Number");
    }
}

function main()
{
    let no = Number(prompt("Enter number : "));
    checkOddEven(no);
}

main();