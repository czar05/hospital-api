const Patient = require('../models/patientSchema');
const Report = require('../models/reportSchema');
const jwt = require("jsonwebtoken");
const { report } = require('../routes');


module.exports.register = async (req, res)=> {
    try {
        const {name,phone} = req.body;
        const getPatient = await Patient.findOne({phone});
        console.log(getPatient);
        if( getPatient !== null){
            return res.status(400).json({
                success:false,
                data: "patient is already registered"
            });
                
        }
        const newdata = {
            name: name,
            phone:phone
        }
        const user = await Patient.create(newdata);

        return res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({success : false, data: "server error"});
    }
}

module.exports.create_report = async (req, res)=> {
    try {
        const id = req.params.id;
        console.log("id: ",id);
        console.log(req.body);
        const getPatient = await Patient.findOne({id});
        if( getPatient !== null){
            const report = {
                patient: id,
                doctor:req.body.doctorId,
                status: req.body.status,
               

            }
            const data = await Report.create(report);

            return res.status(200).json({
                success: true,
                data: data
            })
                
        }else{
            return res.status(400).json({
                success:false,
                data: "patient not found"
            })
        }
       
    } catch (error) {
        console.log(error);
        return res.status(500).json({success : false, data: "server error"});
    }
}


module.exports.all_reports = async (req, res)=> {
    try {
        const id = req.params.id;
        console.log(id);
        const getReports = await Report.find({id}).populate('patient').sort({date: 1});
        if( getReports !== null){
             
        return res.status(200).json({
            success: true,
            data: getReports
        })   
        }else{
            return res.status(400).json({
                success:false,
                data: "data not found"
            })
        }
      

    } catch (error) {
        console.log(error);
        return res.status(500).json({success : false, data: "server error"});
    }
}

