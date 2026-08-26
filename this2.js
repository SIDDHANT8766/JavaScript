////////////////////////////////////
// call

let obj = {
    name : "sid",
    age:20
}

function abcd(a,b,c)
{
    console.log(this, a,b,c)
}

abcd.call(obj, 1,2,3)

//////////////////////////////////////////////////
// apply

let tobj = {
    name : "sid",
    age:20
}

function abcd(a,b,c)
{
    console.log(this, a,b,c)
}

abcd.apply(tobj, [1,2,3])

////////////////////////////////////////////////////
// bind

let mobj = {
    name : "sid",
    age:20
}

function abcd(a,b,c)
{
    console.log(this, a,b,c)
}

let bnd = abcd.bind(mobj, 1,2,3)
bnd()   