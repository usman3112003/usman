
e = require("express")
fs = require("fs")


// making routes for localhost
routes = e.Router()                        


specialkey = "1shsv82"
password = 0911

function pass(req, res, next) {
    // base64 encoded lookslike this
    // Basic TWFuIGlzIGRpc3Rpb...      <= that's why we making base64 like this foarmat           
    h = "Basic " + Buffer.from(specialkey + ":" + password).toString("base64")       // making base64 for route authentication
    
    if (req.headers.passcode == h) {
        next()
    }
    else {
        res.json({
            Status: "ERORR",
            Permission: "DENIED"

        })
    }
}
// pass()

// middle ware
routes.use(pass)                 // it is middle ware and here we call function as middleware


// adding user
routes.get("/createuser", (req, res) => {
    a = JSON.parse(fs.readFileSync("data.json", "utf-8", { falgs: "a" }))
    n = req.query.name, i = req.query.id
    a.push({
        "name": n,
        "id": i
    })
    fs.writeFileSync("data.json" , JSON.stringify(a))
    res.send("DATA ADDED")
})

// delete user
routes.get("/delete" , (req,res) => {
    a = JSON.parse(fs.readFileSync("data.json", "utf-8", { falgs: "a" }))
    b = a.findIndex(x => x.name === req.query.name)
    // console.log(b)
    if(b >= 0 ){
        a.splice(b,1)
        res.send("Name : " + req.query.name + " has deleted")
        fs.writeFileSync("data.json" , JSON.stringify(a))
        }
    else if(b == -1){
        res.send("Name : " + res.query.name + " is already deleted from data")
    }
    
})

// update user data
routes.get("/update/:gname" , (req,res) =>{
    a = JSON.parse(fs.readFileSync("data.json" , "utf-8" , {flags : "a"}))
    a.filter(d => {
       if(d.name == req.params.gname){
           d.name = req.query.name
           res.send("NAME UPDATED")
       }
       else {
           "NAME IS NOT EXIST IN DATA"
       }
       fs.writeFileSync("data.json" , JSON.stringify(a))
    })
})

// get data
routes.get("/get/:gname" , (req,res) =>{
    a =JSON.parse(fs.readFileSync("data.json" , "utf-8" , {flags : "a"}))
    a.forEach(e => {
        if(e.name == req.params.gname){
            res.json(e)
        }
    })
})

// filter data by date
routes.get("/filter/:date", (req,res) => {
    a =JSON.parse(fs.readFileSync("data.json" , "utf-8" , {flags : "a"}))

        u = a.filter(e => {
            if(e.date == req.params.date){
                return e.date
            }
            
        })
        res.send(u)
    
    // res.send("time")
})

// exporting all routes
module.exports = routes
