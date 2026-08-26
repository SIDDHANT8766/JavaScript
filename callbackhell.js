function profileSending(username, Callbackfunc)
{
    console.log("Function profileSending")
    setTimeout(() => {
        Callbackfunc({username, _id :111, age : 20, email : "huihui@hui.com"})  
                       // js creatyes object of that data in {}
                       //   and sends back to the caller functions parameter 
    }, 2000);
}

function nested1(id, call1)
{
    console.log("Function nested1")   
    setTimeout(() => { call1({_id : id, data1 : [10,20,30,40]})
        }, 2000);
}

function nested2(id, call2)
{
    console.log("Function nested1")
    setTimeout(() => { call2({_id : id, data2 : ["HII","Helo","Mello","Mara","pala"]})
        }, 2000);
}


profileSending("Siddhant", function(data){
    console.log(data);

    nested1(data._id, function(data1)
    {
        console.log(data1)
        
        nested2(data._id, function(data2)
        {
            console.log(data2)
        })
    }) 
});