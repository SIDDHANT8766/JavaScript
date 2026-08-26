function Demo(name, age, degree, package, colour)     // Demo is also known as the constructor functions
{
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.package = package;
    this.colour = colour;
}

Demo.prototype.msg = function(text)     // IMP (prototype) -> its just like tyhe share elements,
                    {                       //its gets adds in the every instance of the Demo
                        let h1 = document.createElement("h1");
                        h1.textContent = text;
                        h1.style.color = this.colour;  // IMP this
                        document.body.append(h1);
                    };
                    
                    
let dobj = new Demo("Siddhant", 21, "BE", 1500000, "red");
