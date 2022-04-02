// // even and odd identifier 
// for(i=0; i<=10; i++){
//     if (i % 2 == 0 ){console.log(i + " <== EVEN ")}
//     else {console.log(i + " <== ODD ")}
// }

// // MATH functions
// console.log(Math.pow(2,3) )      // 2 power 3 and Math.pow is pre defined
// console.log(2**3)                // its aslo 2 power 3
// console.log(Math.sqrt(16))            // squar root
// console.log(Math.round(15.46))        // it will simply round off mathmeatically
// console.log(Math.ceil(15.213))        // it will round off number and extend 1
// console.log(Math.floor(15.213))       // it will round off number but decrease 1
// console.log(Math.random())            // it will give randomly number which is between 0 to  1
// console.log(Math.random()+6)          // it will start from 6 to 7
// console.log(Math.ceil(Math.random()+7))     // this ceil will up number and start with 7


// // object looping
// t = {
//     name : "usman",
//     class : 12,
//     age : 19,
//     status  : "active",
    
// }
// t.location ="Karachi,Pakistan"         // pushing location key in t 
// t.t2
// console.log(t)               
// for (key in t){                        // this loop is only for object
//     console.log(key)
// }

// // checking key present or not
// console.log((Object.hasOwnProperty.call(t, "name")))        // by this pre defined func we can check, the required key is present or not  
// console.log((Object.hasOwnProperty.call(t, "status")))     //
// console.log((Object.hasOwnProperty.call(t, "location")))  //
// console.log((Object.hasOwnProperty.call(t, "Gps")))      //
// console.log((Object.hasOwnProperty.call(t, "age")))     //

// // acessing into onject values
// for (v in t) {
//     if (Object.hasOwnProperty.call(t, v)) {
//         e = t.v;
//         console.log(e)
//     }
// }



// o1 = {
//     name : "usman",
//     class : 12,
//     age : 19,
//     status  : "active",
//     o2 : {
//         name : "kamran",
//         class : 13,
//         age : 20,
//         status  : "active",
//     }
        
// }

// // TASK # 1  (acessing obj into obj by obj loop)
// for (y in o1) {
//     if (Object.hasOwnProperty.call(o1,y)) {  b =  o1[y]
//         console.log(b)
//     }
//     for (z in o1.o2){                                                    // here o1.o2 write for acess in obj into obj 
//         if (Object.hasOwnProperty.call(o1.o2,z)) {  f =  o1.o2[z]        // here we printing the obj into obj values 
//             console.log(f)
//         }
    
//     }
    
// }



//    TASK # 2(again)
function abc(){
    for (i = 0; i < 500000; i++){
    a = (Math.round((Math.random()*i)+i))  
    
} 
    console.log("password : " + a)
}
abc()
