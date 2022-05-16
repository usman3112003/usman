e = require("express")
fs = require("fs")
bp = require("body-parser")
ax = require("axios")

routes = e.Router()

function auth(req,res,next){
    basic = "Basic " + Buffer.from(1234 + ":" + 5678).toString("base64")
    console.log(basic)
    if(req.headers.passcode == basic){
        next()
    }
    else{
        res.send({
            STATUS : "ACTION DENIED"
        })
    }
}
// authentication
routes.use(auth)



routes.get("/get_page", (req,res)=>{
    basic = "Basic " + Buffer.from(1234 + ":" + 5678).toString("base64")
    ax.post(                                                     // calling another api in route 
        "http://localhost:4000/",               // url
    {
        "name":"usman"                          // body (optional in get method but must in post method)      
    },
    {
        headers:{passcode : basic}                // header (optional) and in header we pass authentication   
    })
    .then(function (response){
        res.send(JSON.stringify(response))
    }
    )
    .catch(function (error){
        res.send(error)
    })
})


routes.get("/page_2",(req,res)=>{
    ax.get(
        "http://localhost:4000/work",
        {
            
        }
    )
    .then(function (response){
        res.josn(JSON.stringify(response.data))
    })
    .catch(function (error){
        res.send(error)
    })
})


module.exports = routes
