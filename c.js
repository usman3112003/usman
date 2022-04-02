
abc = require('sha256');     // here we save sha256 acess in abc var

a = abc("hello")             //  making hash with sha256
console.log(" hash 1 :  " + a)

b = abc("hello")
console.log(" hash 2 : " + b)

c = abc(b)                  // making hash value of hash 
console.log(" hash of 2 : " + c)

d = abc.x2("hello")
console.log(d)

