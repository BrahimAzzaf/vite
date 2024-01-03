const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    enrollNmber: { type: Number, required: true },


})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel
