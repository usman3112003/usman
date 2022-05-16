exp = require("express")
routes = exp.Router()

//importing 
var model1 = require("./model")

routes.get("/home",(req,res)=>{
    res.send("THIS IS HOME PAGE")
})

routes.post("/add", async(req,res)=>{
    console.log(req.body);
    model1.insertMany([{
        name : req.body.name,
        id : req.body.id,
        attendance:req.body.attendance,
        status  : req.body.status
    }])
    
    res.json("data added")
})


routes.post("/delete", (req,res)=>{
    console.log(req.body);
    model1.deleteMany({
        name : req.body.name
    }).exec()     // in delete AND UPDTAE we should use exec()
    
    res.json("data deleted")
})



module.exports = routes