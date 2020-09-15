const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    desctiption:String,

    likes:{
        type:Number,
        default:0,
    },
    membersnum:{
        type:Number,
        default:0,
    },
})

module.exports = {
    groupSchema
}