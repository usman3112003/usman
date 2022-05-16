 // making MVC(Model View Controller)  #task
 


ex = require("express")
a = ex()
fs = require("fs")
port = 3000  

// importing controller routes
abc = require("./controller.js")   // this route module should be import after a.listen
// use controller as a midlleware on this server
a.use(abc)




a.get("/" , (req,res) => {
    res.send("WECOME INTO HOME PAGE,......")
})



a.listen(port , () => {
    console.log("SERVER IS RUNING AT : " + port)
})

