exp = require("express")
a =exp()
port = 3500


// routes 
abc = require("./controller")

// middleware
a.use(abc)


a.get("/",(req,res)=>{
    res.send("helloooo,....")
})






a.listen(port,()=>{
    console.log("SERVER IS RUNING AT "+port)
})
