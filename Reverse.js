function reverseNumber(num)
{
    let rev = 0;

    while(num > 0)
    {
        let digit = num % 10;

        rev = rev * 10 + digit;

        num = Math.floor(num / 10);
    }

    console.log("Reverse =", rev);
}

function main()
{
    let no = Number(prompt("Enter number : "));
    reverseNumber(no);
}

main();