employees = [
    {"id" : 1234,
    "first_name" :  "usman",
    "last_name" : "miazi",
    "salary" : 100000
}, 
{
    "id" : 5678,
    "first_name" :  "siddiquee",
    "last_name" : "khan",
    "salary" : 200000
},
{
    "id" : 6789,
    "first_name" :  "kamran",
    "last_name" : "Akmal",
    "salary" : 300000
}
]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
temp = ""

class employee {
    constructor(id,f_name,l_name,salary){
        this.e1 = id ;
        this.e2 = f_name ;
        this.e3 = l_name ;
        this.e4 = salary ;
    }
    getid(){
        
        // temp = employees.filter(a => {
        //     if (a.first_name == this.e2) return a.id
        // })

        // if(temp.length > 0 ){
        //     console.log(temp[0].id);
        // } else {
        //     console.log("id not match")
        // }

        employees.forEach(a => {
            
            if (a.first_name == this.e2){
                console.log(a.id)
                
            }
                
            
        });
        
            }
    getfirst_name(){
        
        employees.forEach(a => {
            
            if (a.id == this.e1){
                console.log(a.first_name)
                
            } 
        });
    }
    getlast_name(){
        employees.forEach(a => {
            
            if (a.id == this.e1){
                console.log(a.last_name)
                
            } 
        });
    }
    getname(){
        employees.forEach(a => {
            
            if (a.id == this.e1){
                console.log(a.first_name + " " + a.first_name )
                
            } 
        });
    }
    getsalary(){
        employees.forEach(a => {
            
            if (a.id == this.e1){
                console.log(a.salary)
                
            } 
        });
    }
    setsalary(){
        employees.forEach(a => {
            
            if (a.id == this.e1){
                console.log(a.salary + 20000)
                
            } 
        });
    }
    getannualsalary(){
        employees.forEach(a => {
            
            if (a.id == this.e1){
                console.log(a.salary * 12)
                
            } 
        });
    }
    raisesalary(){
        employees.forEach(a => {
            
            if (a.id == this.e1){
                console.log(a.salary/10 * 10 )         // percent form not correct
                
            } 
        });
        }
    }



EMPLOYEE = new employee("1234","usman","miazi","100000")
//EMPLOYEE = new employee("5678","siddique","khan","100000")
//EMPLOYEE = new employee("6789","kamran","akmal","100000")
EMPLOYEE.getid()
EMPLOYEE.getfirst_name()
EMPLOYEE.getlast_name()
EMPLOYEE.getname()
EMPLOYEE.getsalary()
EMPLOYEE.setsalary()
EMPLOYEE.getannualsalary()
EMPLOYEE.raisesalary()

