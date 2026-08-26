function Demo(name, age, degree, package, colour)     // Demo is also known as the constructor functions
{
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.package = package;

    this.msg = function(text)
    {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = colour; 
        document.body.append(h1);
    };

}

Demo.prototype.company = "MNC";       // IMP (prototype) -> its just like tyhe share elements,
                                    //                      its gets adds in the every instance of the Demo

let dobj = new Demo("Siddhant", 21, "BE", 1500000, "red");
