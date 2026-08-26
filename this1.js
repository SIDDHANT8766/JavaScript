// console.log(this);  // global scope -> window

/////////////////////////////////////////////////////////////////////////

//function Demo() //  function scope -> window
//{
  //  console.log(this)
//}

// Demo();

//////////////////////////////////////////////////////////////////////////

//  this behaves like the object here

//let obj = {
  //  name : "Sid",
    //age : 21,
    //funthis : function()
    //{
      //  console.log(this)     // here it behave as the object
    //}
//}

//obj.funthis();

//////////////////////////////////////////////////////////////////////////////

 // Event Listner -> object or the thing itself
                                // here h1 is .

//document.querySelector("h1").addEventListener("click", function()
//{
  //  console.log(this.style.color = "red");
//})

////////////////////////////////////////////////////////////////////////////

class Demo
{
    constructor(value)
    {
        console.log("Hii")
        this.a = 12;
    }

    
}

let inst = new Demo();



