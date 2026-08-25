let inp = document.querySelector("input");

inp.addEventListener("input",function(details){      // Event while taking input
                                    //     |
                                        // In functions brackets there 
                                        //      is the details proprty of input  
                                        //          ( we can see it in inspect)
    console.log(details.data);

});