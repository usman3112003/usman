
//   ````````|`````````````
//           |
//           | ASK           lab.6 
a=[
    {
        name : "usman" ,
        pass  : 1234 , 
    },
    {
        name : "hassan" , 
        pass  : 4321 ,
    },
    {
        name : "saqlain" , 
        pass : 4231 ,
    }
]

function adduser (p1,p2){
    a.push(
        {
            name : p1 ,
            pass : p2 ,
        }
    )
}
adduser ("wajid" , 4132)
console.log(a)


function getuser (){
    a.forEach( a  => {
        console.log("USERS are ; " + a.name)
    });
}
getuser()

function login (t1,t2){
    a.forEach ( a => {
        if (a.name === t1 && a.pass === t2 ){
            console.log("User identified" )
        }
        else {
            console.log("User not recognized")
        }
    });
}
login("rehman" , 4231 )
login("wajid" , 4231  ) 
login("usman" , 1234  ) 


//   ```````````````````
//   |
//   |```````
//   |
//   |       ECTHing  DATA,,,

function getdata(){
    url = "1.js";  // in this url value we will give any web 
    fetch(url).then ((response) =>{
        response.json () 
    }) .then ((data)=>{
        console.log(data)
    })
}
getdata()



