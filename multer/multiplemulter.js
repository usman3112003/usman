exp = require("express")
a = exp()
port = 3600

path = require("path")
mult= require("multer")
morg = require("morgan")


// midlle ware
a.use(morg("combined"))

///////////////////////// multer ///////////////////////////////////////////////////////////////////////////////

// creating storage and unique name for file
storage1 = mult.diskStorage({
    destination : "./multipledatafile" ,
    filename : function (req , file , cb){                 // file = uploaded files (data)         cb = call back 
        cb( null , file.originalname.split(".")[0] + "_" + Date.now() + path.extname(file.originalname))
    }
    
})

// multer initializing
initial = mult({
    storage : storage1
})

// middleware
middle = initial.fields(
    [
    {
        name : "f1" , maxCount : 1                                
    },                                       /////// here f1 & f2 is key and maxcount is file uploading limit accord to key
    {
        name : "f2" , maxCount : 7 
    }
    ]
)



a.get("/home" , (req,res)=>{
    res.send("HELOO! DATA is processing,,,,, .")
})

a.post("/uploaddata" , middle , (req,res) =>{
    res.send("DATA UPLOADED ! ...")
})


a.listen(port , () => {
    console.log("SERVER IS RUNING AT PORT : "+ port)
})