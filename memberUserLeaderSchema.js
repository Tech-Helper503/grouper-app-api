const mongoose = require('mongoose');

const memberUserLeaderSchema = new mongoose.Schema({
    username:String,
    password:String,
    id:{
        type:Math,
        default:Math.random()
    }
});

module.exports = {
    memberUserLeaderSchema,
}