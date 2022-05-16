e = require("express")
a = e()
fs = require("fs")
port = 4000
bp = require("body-parser")
morg = require("morgan")

a.use(bp.urlencoded({extended:false}))
a.use(bp.json())
a.use(bp.text())

// importing controller routes
abc = require("./controller.js")   // this route module should be import after a.listen

// use controller as a midlleware on this server
a.use(abc)


data = fs.createWriteStream("data.txt" , { flags : "a"})
a.use(morg ("combined" , {stream : data}))                 // here combined is al features of morgan
// a.use(morg("tiny" , {stream : data}))                    // here tiny will show some features of morgan



a.get("/" , (req,res) => {
    res.send("WECOME INTO HOME PAGE,......")
})

a.get("/work" , (req,res) => {
    res.json({
        "id":"2352",
        "pass":"2372632"
    })
})


a.listen(port , () => {
    console.log("SERVER IS RUNING AT : " + port)
})

