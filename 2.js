// var

n = 10
m = 20 
o = 30

//cond 1
if(n + m == o ){
    console.log("true")
}
else {
    console.log("false")
}

//cond 2
if(n < m ){
    console.log("true")
}
else{
    console.log("false")
}

//cond 3
if(n > m ){
    console.log("true")
}
else{
    console.log("false")
}

//cond 4
if(n + m <= o){
    console.log("true")
}
else{
    console.log("false")
}

//cond 5
if(n + m <= o){
    console.log("true")
}
else{
    console.log("false")
}

//cond 6 =>     ==     only values should equal      
if(n + m == o ){
    console.log("true")
}
else {
    console.log("false")
}

//cond 7 =>    ===     values, string, integers, boolean must equal 
if(n + m === o ){
    console.log("true")
}
else {
    console.log("false")
} 

//cond 8  =>   !=     not equals to
if(n + m != o){
    console.log("true")
}
else{
    console.log("false")
}

//cond 9  =>      &&    for adding multiple condition in if or else if statment  (all cond obey operations then statment go print)
if(n + m == o && o / n == 3 ){
    console.log("true")
}
else{
    console.log("false")
}

//cond  10 =>  ||       for adding multiple condition but one of them obey cond then statment go print 
if (n + m == 0 || o / n == 4){
    console.log("true")
}
else {
    console.log("false")
}

//cond 11 using if, else, else if
if (n == m){
    console.log("true")
} 
else if (n + m == o ){
    console.log("OK")
}
else{
    console.log("false")
}
