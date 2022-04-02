t = new Date() // here new Date is used for intialize Date pre-defined function
console.log("today date is : " + t.getDate())
console.log("month : " + t.getMonth())
console.log("year : " + t.getFullYear()) 

console.log("Hour : " + t.getHours())
console.log("Miunte : " + t.getMinutes())
console.log("Seconds are : " + t.getSeconds())
console.log("millseconds are : " + t.getMilliseconds())

// .SLICE
a = ["pen", "books", "bags", "pencil", "ruler"]
console.log(a)

v = a.slice(1,4)           // here 1 to 4 print except 4 index
console.log(v)

v = a.slice(3,5)           // here 3 to 5 will print except 5 index
console.log(v)


// .splice 
y = ["pen", "books", "bags", "pencil", "ruler"]
console.log(y)

m =  y.splice(1,4 ,"eraser", "marker")
console.log(m)

m = y.splice(2,4)
console.log(m)
