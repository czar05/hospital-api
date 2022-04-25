const { findOne } = require('../models/doctorSchema');
const Doctor = require('../models/doctorSchema');
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res)=> {
    try {
        console.log(req.body);
        const email = req.body.email;
        const user = await Doctor.findOne({email});

        if(user){
            return res.status(400).json({success:false,data: "Dr. is already registered"});
        }
        const user1 = await Doctor.create(req.body);

        return res.status(200).json({
            success: true,
            data: user1
        })
    } catch (error) {
        return res.status(500).json({success : false, data: "server error"});
    }
}

module.exports.login = async (req, res)=> {
    console.log("login api called");
    try {
        const {email, password} = req.body ;
       
        const user = await Doctor.findOne({email});
         
        if(user.email !== email){
            return res.status(400).json({success:false, data:"user doesn't exist"});
        }

        if(user.password != password){
            console.log(user.password);
            console.log(password);
            return res.status(400).json({success:false, data:"user password is incorrect "});
        }

        const token = await jwt.sign({
           name : user.name,
           id: user.id
        },"bcjbkdv");

        return res.status(200).json({
            success: true,
            data: {
                token,
            },
        })
    } catch (error) {
        return res.status(500).json({success : false, data: "server error"});
    }
}