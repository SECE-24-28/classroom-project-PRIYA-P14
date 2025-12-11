const mongoose = require('mongoose');

const user=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

// Ensure unique indexes on email and mobileNumber
user.index({ email: 1 }, { unique: true });
user.index({ mobileNumber: 1 }, { unique: true });

module.exports = mongoose.model('User', user);