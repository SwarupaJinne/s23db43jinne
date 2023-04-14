const mongoose = require("mongoose")
const mangoSchema = mongoose.Schema({
    mango_type: String,
    mango_quantity: String,
    Mango_Price: Number
})
module.exports = mongoose.model("mango",mangoSchema)

