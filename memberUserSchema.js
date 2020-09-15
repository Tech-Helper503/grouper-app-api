const mongoose = require('mongoose');

const memberUserSchema = new mongoose.Schema({
    username:String,
    password:String,

    id:{
        type:Math,
        default:Math.random()
    }
})

module.exports = {
    memberUserSchema,
}