// Using body-parser
a = require("express")
b = a()
port = 3400

// body-parser use
c = require("body-parser")
b.use(c.urlencoded({
    extended : false}))
b.use(c.json())


// routes
b.get("/",(req,res)=>{
    res.send("HEllo WELcome to home page,.....!")
})

b.post("/page",(req,res)=>{                             // this will go in body and can be see by post man body
    res.send(req.body)                                   // here requets.body means the post is direct sent to body
})

b.listen(port,()=>{
    console.log("SERVER IS SUCESSFULLY START>>>>>" + port)
})
