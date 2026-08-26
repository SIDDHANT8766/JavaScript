// Inheritance 1

class Demo
{
    constructor(name, company, price, color)
    {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
        this.role = "Demo"
    }

    write(text)
    {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`; //  
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

class Child extends Demo
{
    constructor(name, company, price, color)
    {
        super(name, company, price, color);

        this.role = "Child"
    }

    remove()
    {
        document.querySelectorAll("h1").forEach(function(elem)
                                                            {
                                                                elem.remove();
                                                            })
    }
}

let dobj1 = new Demo("Unicorn" , "Honda", 143000, "black");
let dobj2 = new Demo("CB350" , "Honda", 243000, "red");
let cobj = new Child("AfricaTwin" , "Honda", 1430000, "blue");