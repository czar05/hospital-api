const mongoose = require('mongoose');



 const doctorSchema = new mongoose.Schema({
     name:{
         type : String,
         required : true
     },
     email: {
        type: String,
        required : true,
        unique: true 
    },
    password: {
        type: Number,
        required: true,
        minlength:4
    },
    department:{
        type: String,
        required: true
    }

 });

 const Doctor = mongoose.model('doctor',doctorSchema);

 module.exports = Doctor;