
// class
class animal{
    constructor(p1,p2,p3){
        this.name = p1               //  here we get p1 in name var and    this.  should be write for make var in constructor
        this.color = p2              //  here we get p2 in f_name var and    this.  should be write for make var in conctructor
        this.legs = p3               //  here we get p3 in class var and    this.  should be write for make var in constructor
    }
    n(){
        return this.name
    }
    c(){
        return this.color 
    }
    l(){
        return this.legs
    }

}

// EXPORTing 
module.exports = animal       //  exporting animal class into d2.js


// Using class module for another class
 class birds extends animal {          // here we use animal class module but extend some new constructor
    constructor(p1,p2,p3,p4,p5){
        super(p1,p2,p3)              // here super call animal constructor
        this.status = p4 ;
        this.f_food = p5 
    }
    s(){
        return this.status
    }
    f_f(){
        return this.f_food
    }
}
efg = new birds ("Pigeon", "white", 2, "fly", "insects" )
console.log(efg)
console.log(efg.c())
console.log(efg.f_f())

