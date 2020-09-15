const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true,
    },
    
    id:{
        type:Math,
        default:Math.random()
    }
});

module.exports = {
    adminUserSchema
}