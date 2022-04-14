const { read } = require("fs")

express =  require("express")
app = express()
fs = require("fs")
bodyParser = require("body-parser")
port = 3400
// initate body-parser

app.use(bodyParser.json())

app.get("/",(req,res) =>{
    res.send("hello")
})

// attaching json file and also reading it
app.get("/read_data",(req,res) =>{
    const read = JSON.parse(fs.readFileSync("./data.json" , "utf-8" ))        // here utf-8 decrypted data into readable form and "." in path is represent that file is in one back path
    res.json(read)                                                      // here json.parse will correct the syntax of json
})

// acess into json file data 
app.get("/acess_data/:gname",(req,res) => {
    const read1 = JSON.parse(fs.readFileSync("./data.json" , "utf-8" ))        // here utf-8 decrypted data into readable form and "." in path is represent that file is in one back path 
    acess = read1.find(e => {                                                    // here json.parse will correct the syntax of json             
        return e.name == req.params.gname

     });
    
   res.json(typeof acess !== "undefined" ? acess : "User not exist")     // here "!==" equals to "not equals" & "? = print" & ": = else"
})

// update or change the data
app.get("/update_data/:gname",(req,res) => {
    const read3 = JSON.parse(fs.readFileSync("./data.json" , "utf-8" ))
    read3.forEach(( p1 , index ) => {
        if(p1.name == req.params.gname){
            save = [p1 , index]
            return true
        }
    });
    if(save.length > 0){
        if(typeof req.query.gn !== "undefined") { 
            read3[save[1]].name = req.query.gn
        }
        if(typeof req.query.gi !== "undefined") { 
            read3[save[1]].id = req.query.gi
        }
        fs.writeFileSync("./data.json" , JSON.stringify(read3))
    }
    res.send(save.length > 0 ? {message : "DATA_CHANGED" , data : save[0] } : "user not exist")
})

app.listen(port, () => {
    console.log("SERVER IS RUNNING at : " + port)
})