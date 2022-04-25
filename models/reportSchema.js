const mongoose = require('mongoose');
const Schema = mongoose.Schema;



 const reportSchema = new Schema({

     patient:{
         type: Schema.Types.ObjectId,
         ref : 'patient'
     },
     doctor:{
         type : Schema.Types.ObjectId,
         ref: 'doctor'
     },
     status: {
         type: String,
         enum: ['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit']
     },
     date:{
         type:Date,
         default:Date.now()
     },
    

 });

 const Report = mongoose.model('report',reportSchema);

 module.exports = Report;