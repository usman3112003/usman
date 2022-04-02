
// class work
a=[1,2,3,4]
b=["a","b","c","d"]

c=[a,b]

//apply loop
for(i = 0 ; i < c.length ; i++ ){
    abc = c[i];
    console.log(abc)

    for ( j = 0 ; j < abc.length ; j++){
        xyz = abc[j];
        console.log(xyz)
    }   
}

// another loop
c.forEach(k => {
    console.log(k)
    k.forEach(m => {
        console.log(m)
    });
})


a=[
    [
        {name : "Usman", f_name : "syed qazi", sub : "eng", marks : 84, attend:49 } ,
        {name : "Raza" , f_name : "khuram shabir" , sub : "eng", marks : 85, attend : 71} ,   
    ] ,
    [
        {name : "Aqib", f_name : "munir", sub : "math", marks : 79, attend : 80 } ,
        {name : "Sara", f_name : "amir", sub : "math",  marks : 90, attend : 86   } , 
    ]
]

a.forEach(b => {
    
    b.forEach(d => {
        
        if (d.marks >= 85 && d.marks >= 85 ){
            console.log("Subject : "+ d.sub + "\n" + "Name : " + d.name + " \n" + "Father name : " + d.f_name + "\n " + "Marks : " + d.marks + "  Attendance : " + d.attend + "\n "+ "Result : PASSED"  + "\n" + "`````````````````````````````````````````````````````````");
        }
        else {
            console.log("Subject : "+ d.sub + "\n" + "Name : " + d.name + " \n" + "Father name : " + d.f_name + "\n " + "Marks : " + d.marks + "  Attendance : " + d.attend + "\n "+ "Result : FAILED"  + "\n" + "`````````````````````````````````````````````````````````")
        }
        

    });
});
    
