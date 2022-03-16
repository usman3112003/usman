/*a={
    name : "usman",
    class : "block chain",
    //     q1  q2 q3 q4  q5       <=  obtained marks
    quiz : [60,70,80,90,95],
    attend : 60,
    overall_marks : 450,
    overall_attend : 90,
}
console.log(a)



a=[10,20,30,40]
// push to add itmes at the end of array
a.push(50,60,70,80,a.name);

// pop to remove items at the end of array
a.pop();
a.pop();
a.pop();

console.log(a);


//example # 1
for (let step = 0 ; step < 5 ; step ++){
    console.log("walking east one step")
}


//example # 2
for (i = 1 ; i <= 10 ; i ++){
    console.log("2x" + i +  "=" + (i * 2))
}





//example # 3
for (i = 1 ; i <= 10 ; i ++ ){
    console.log("a " + "+ " + i + "=" + (i + 1))
}


//example # 4 
var d=5
while(d<10){
    console.log(d)
    d++
}
*/

// var is globaly describes value
var name = "usman"

// let is a suppossing value and is used in block scope and is work only in block scope
{
    let name = "Aseef"
    console.log(name)  // it will print aseef because of let
}

// const is used for fixed value 
const qualification = "inter"
//var qualification = "matric"     =>   var of const cannot make