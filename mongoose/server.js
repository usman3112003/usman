// express
exp = require("express")
a = exp()
port = 3500

log = require("morgan")
const bodyParser = require("body-parser")



//MIDDLE WARES
a.use(bodyParser.json())
a.use (log("dev"))

// mongoose connection
mong = require("mongoose")


mong.connect("mongodb://0.0.0.0:27017/db")
const db = mong.connection
db.on("error" , err => console.error(err))
db.once("open" , ()=>{
    console.log("CONNECTED TO MONGODB/data")
}) 






// importing
abc = require("./routes")
a.use("/", abc)


a.get("/",(req,res)=>{
    res.send("NODE & MONGO TUT,......")
})







a.listen(port,()=>{
    console.log("server is runing at " + port)
})
