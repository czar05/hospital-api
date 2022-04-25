const mongoose = require('mongoose');
const Schema = mongoose.Schema;


 const patientSchema = new mongoose.Schema({
     name:{
         type : String,
         required : true
     },
     phone:{
         type : String,
         required : true
     },
 });

 const Patient = mongoose.model('patient',patientSchema);

 module.exports = Patient;