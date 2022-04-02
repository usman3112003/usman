// class
class stud{
    constructor(p1,p2,p3){
        this.name = p1 ;               //  here we get p1 in name var and    this.  should be write for make var in cosntrutor   
        this.f_name = p2 ;             //  here we get p2 in f_name var and    this.  should be write for make var in constructor
        this.class = p3 ;              //  here we get p3 in class var and    this.  should be write for make var in construtor
    }
    n(){                            // here we make function and give it any var name
        return "student name is : " + this.name
    }
    f(){                          // here we make function and give it any var name 
        return "student father is : " + this.f_name
    }
    c(){                           // here we make function and give it any var name 
        return "class is : " + this.class   }
}

abc = new stud("usman","syed_qazi",12)  // here we iinitialize module/class name
console.log(abc)
console.log(abc.n())
console.log(abc.f())
console.log(abc.c())
