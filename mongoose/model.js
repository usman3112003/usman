mong = require("mongoose")


// employee management system
schema = mong.Schema({
    name : { type : String },
    id :   { type : String },
    attendance:{type : Number},
    status  : { type : String }
})

model = mong.model("employees", schema )



module.exports = model



