z = [
    {
        "name":"usman",
        "class":"block_chain",
        "sec":"cg-05"
    },
    {
        "name":"kami",
        "class":"block_chain",
        "sec":"bf-03"
    },
    {
        "name":"siddique",
        "class":"cyber_security",
        "sec":"At-03"
    }
]



e = require("express")
a = e()
p = 3001

a.get ("/" , (req,res) => {
    res.send("HELLO ! WECOME HOME,....")
})

a.get ("/jsondata" , (req,res) => {
    res.json({                                     // by this we can directly send json format to route page
        "name":"usman",
        "id":1234
    })
})

a.get ("/a" , (req,res) => {
    res.send("HELLO ! WECOME HOME,....")
})

a.get ("/json" , (req,res) => {
    res.send(z)
})

a.get ("/data/:givenname" , (req,res) => {                  // here in route "/:givenname"  is what we put here .
       v = z.find(a=>{                                         // this find is a loop and auto condition is in it
        return a.name == req.params.givenname
    })
    res.send(v)
})

a.get ("/d/:name/:gage/:gpass" , (req,res) => {                // by this route we can make multi routes but routes should be fulfill       
    res.send(req.params)                                       // here we can give multiple and no limitless params                             
})

a.get ("/my-query" , (req,res) => {                            // here we can give multiple and unlimit params in this route                          
    res.send(req.query)
})


a.listen (p , () =>  {
    console.log("example app is sucessfully listening and running on port : " + p)
})
