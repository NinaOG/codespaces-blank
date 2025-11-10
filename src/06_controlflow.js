
let isJohnOlder, isMarkOlder, sameAge

let ageMark = 21;
let ageJohn = 22;


isJohnOlder = ageJohn > ageMark
sameAge = ageMark == ageJohn



if(sameAge)
{
    console.log("Gleichalt")
}
else if(isJohnOlder)
{
    console.log("John ist älter.")
}
else{
    console.log("Mark ist älter")
}