const mongoose = require("mongoose")
const mangoSchema = mongoose.Schema({
    
    mango_type: {type:String, minlength:2,maxlength:20},
    mango_quantity: {type:String, minlength:5,maxlength:1000},
    Mango_Price: {type:Number, min:10,max:2000}
})
module.exports = mongoose.model("mango",mangoSchema)

