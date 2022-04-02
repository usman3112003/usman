
function add(p1,p2){
    return p1 +p2
}
a = add(10,20)

function mul(a1,p2){
    return a * p2
}
m = mul(a,3 )


console.log("RESult is  : " + m)


price = {
    "cofee" : "5$",
    "bread" : "3$",
    "fries" : "2$",
    "additional" : [],
    "add"  : function (p1,p2,p3){
        this.additional.push(p1,p2,p3)  // here this will save console.log function into this
    }
}

price.add("butter","ice","juice")
async function abc(){
    await fetch("http://dummy.restapiexample.com/api/v1/employees")
   return "abc,,,xyz"
}
x=abc()
console.log(x)



function a(){
    return "this is one.1"
}
a=a()
console.log(a)

function b(){
    return "this is two.2"
}
b=b()
console.log(b)

function c(){
    return "this is three.3"
}
c=c()

console.log(c)


// aerrow function 
z = () => {             //here z is function recall name
    console.log("abc")
} 
z()

// aerrow function here usman is return and name is parameter
a = p1 => "usman" ;
console.log(a())     // here a is recal in the console script and also print it 

// aerrrow function  here we use bracket because we have 2 params and value obviously 2 we use curly bracks.
b = (p1,p2)=>{
    return p1/p2
}

console.log(b(344,659))

// funtion calling after some time interval 
s = (p1,p2)=>{
    return p1/p2
}
f = s(232,2343)
j = setTimeout( () => {                         // we cannot recall any function and t will be capital of Time
     console.log("hi its me " + f );
    
}, 3000)       // here 1000 ms = 1 sec 
clearTimeout(j)

h =   async (settimeout( abc=>{
    await console.log("hey i am waiter! hahaha");

},3000))

console.log(h)
console.log("i am _______")

a = setInterval(() => {                      // here we cannot recall function and i should be capital of Interval      
    console.log("hey it's me")
}, 1000);
// clearInterval(a)                          it is used to stop interval of time
