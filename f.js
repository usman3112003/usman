
class cars{
    constructor(p1,p2,p3){
        this.name = p1 ;
        this.model = p2 ;
        this.price = p3
    }
    car_name(){                // here static will fix function and use for constant values, call with class name ever
        return "CAR : " + this.name              // function recall name and var name should not same
    }

    car_model(){                      // function recall name and var name should not same
        return "MODEL # " + this.model 
    } 
    car_price(){                      // function recall name and var name should not same
        return "COST : " + this.price + " rupees"
    }
    car_horn(){
        return  "peeeeepppppppppppppppp !!!"
    }
}


Auto_mob = new cars("Honda", "2020", "25,00,000" )
console.log(Auto_mob)
console.log(Auto_mob.car_name())
console.log(Auto_mob.car_model())
console.log(Auto_mob.car_price())
// console.log(cars.car_horn())           "not runing static func"



// MAKING FUNCTION WHICH WORK AS A CLASS CONSTRUCTOR
function abc (p1,p2,p3){          // this is also a class
    this.work = p1;
    this.salary = p2;
    this.attendance = p3 ;   
    
    this.bio = function(){            // this is class function and bio is func recall name   
        return "WORK : " + this.work + ", SALARY :" + this.salary + ", ATTEN : " + this.attendance
    
}

}

xyz = new abc("MANAGER", "1,00,000", 30)
console.log(xyz)
console.log(xyz.bio())             // class func is recall

abc.prototype.name = "Usman"                // we give "name" var into "abc class"  it will not visible until we print this
abc.prototype.biodata = function (){        // pushing fucntion into class from outside the scope
    return xyz.name + " is an honourable person ," + xyz.bio()  
}
console.log(xyz.name)
console.log(xyz.biodata())





// Creating local host 
var exp = require("express")
var a = exp()
port = 1992

a.get ("/" , (req,res) => {
    res.send("HELLO ! WECOME HOME,....")})
a.listen (port , () =>  {
    console.log("example app is sucessfully listening on running " + port)
})

// down script is copy and paste from google
const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log("Example app listening on port " + port)}
)
