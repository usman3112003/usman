class grandparent{
    constructor(p1,p2,p3){
        this.f_name = p1 ;
        this.f_age = p2 ;
        this.f_dob = p3 ;
    }
    gname(){
        return this.f_name 
    }
    gage(){
        return this.f_age
    }
    gdob(){
        return this.f_dob
    }
    gbiodata(){
        return "Grand father is : " + this.f_name  + ", his age is : " + this.f_age + ", and date of birth is : " + this.f_dob + "\n"
    }
}
// GRAND = new grandparent("Syed Batoo", "70", "1877-7-3")
// console.log(GRAND)
// console.log(GRAND.gbiodata())           // here we will give class intialize name to acess gbiodata

class son extends grandparent {
        constructor(p1,p2,p3,p4,p5){
            super(p1,p2,p3);
            this.son_name = p4;
            this.son_dob = p5
        }
        sname(){
            return this.son_name
        }
        sdob(){
            return this.son_dob
        }
        sbiodata(){
            return this.gbiodata() + "his child name is : " + this.son_name  + ", his date of birth is : " + this.son_dob + "\n"
        }
}
// CHILD = new son ("Syed Batoo", "70", "1877-7-3","Syed_qazi","1953-3-2")
// console.log(CHILD)
// console.log(CHILD.sbiodata())

class gson extends son{
    constructor(p1,p2,p3,p4,p5,p6,p7){
        super(p1,p2,p3,p4,p5) 
        this.Grand_son_name = p6 ;
        this.Grand_son_dob = p7
    }
    gsname(){
        return this.Grand_son_name
    }
    gsdob(){
        return this.Grand_son_dob
    }
    
    gsbiodata(){
        return this.sbiodata() + "His Grand_son is : " + this.Grand_son_name + ", his date of birth is : "  + this.Grand_son_dob + "\n"  // in return we should use this. for calling a function
    }
}

GSON = new gson("Syed Batoo", "70", "1877-7-3","Syed_qazi","1953-3-2","Arman","2005-1-5")
console.log(GSON)
console.log(GSON.gsbiodata())

x = (GSON.gdob())
y = (GSON.sdob())
z = (GSON.gsdob())

m = (x.split("-"))
n = (y.split("-"))
o = (z.split("-"))

a = 2022-m[0]
b = 2022-n[0]
c = 2022-o[0]
console.log("Grand Father age is : " + a)
console.log("father age is : " + b)
console.log("Grand son age is : " + c)

// STRINGS functions
a = "hello world! this is me"
console.log(a.slice(0,7))         // here it will cut the 0 to 7 index string
console.log(a.slice(-10,-1))      // here it will start index from end of the string
console.log(a.substring(0,7))     // it is simialr work as slice but not work -index
console.log(a.indexOf("is"))      // it wiil tell the index of "is" and we should write "O" capital in indexOf
 
b = ["i", "am", "is", "are", "are", "are","are'not"]
console.log(b.indexOf("am"))      // it works on string as well as on array
console.log(b.indexOf("i"))
console.log(b.indexOf("him"))      // it will print -1 means "him" not in array or string
console.log(b.lastIndexOf("are"))  // it will tells us the last index of "are" in array and "lastIndexOf" is camel syntax

// Boolean 
// c = ["usman", "arman", "rehman", "raheem"] 
// console.log(c.startsWith("usman"))           // it will tells us whether "usman" is starting index in array
// console.log(c.endsWith("raheem"))           // it will tell us no whether "raheem" is end of index in array

// file extensions sepration
f = "image.json"  
console.log(f.split("."))                       // it will remove signs which we give or aplhabet

e = "py-js"
console.log(e.split("-"))

f  = "usman6425@gmail.com"
console.log(f.split("@"))

h  = "usman"
console.log(h.split("m"))
