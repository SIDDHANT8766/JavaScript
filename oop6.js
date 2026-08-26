// prototypal inheritance

let Coffee={
    color: "dark",
    drink: function()
    {
        console.log("gut gut gut");
    } 
}

let obj = Object.create(Coffee);

obj.taste = "better";

obj.drink();

console.log(Coffee);
console.log(obj);