const Patient = require('../models/patientSchema');
const Report = require('../models/reportSchema');

module.exports.reports = async (req, res)=> {
    try {
        const status = req.params.status;
        const token  = req.body.token;
        console.log(status);
        const getReports = await Report.find({status}).populate("patient");
        console.log(getReports);
        if(getReports !== null ){
              
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