function Demo(name, age, degree, package, company, colour)     // Demo is also known as the constructor functions
{
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.package = package;
    this.company = company;
    this.msg = function(text)
    {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = colour; 
        document.body.append(h1);
    };

}

let dobj = new Demo("Siddhant", 21, "BE", 1500000, "MNC","red");
