const jwt = require('jsonwebtoken');


const requireAuth = (req,res,next) =>{
    const token = req.body.token;

    if(token){
      jwt.verify(token, 'bcjbkdv', (err,decodedToken) =>{
          if(err){
              console.log(err.message);
              res.status(400).json({message:"error in validating the token"});
          }else{
              console.log(decodedToken);
            next();
          }
      })
    }else{
        res.status(200).json({message: "please provide token"});
    }
}

module.exports = {requireAuth};