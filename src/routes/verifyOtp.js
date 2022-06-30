const express = require('express');
const router = new express.Router();

const bcrypt = require('../middleware/bcrypt');
const otp = require('../controllers/otp');

router.post('/verify',(req,res)=>{
    otp.match(req.body.email,req.body.otp,(err,data)=>{
        if(err)
            res.send(err);
        if(data==undefined)
            res.send("OTP Expired. Kindly try to resend it.");
        else if(data==true)
        {
            otp.remove(req.body.email,(error,dataa)=>{
                if(error)
                    res.send(error);
                else
                    res.send("Success. Verified.");
            })
        }
        else
            res.send("Failure. Kindly check again.");
    })
});

router.post('/api/verify',(req,res)=>{
    otp.match(req.body.email,req.body.otp,(err,data)=>{
        if(err)
            res.send(err);
        if(data==undefined||data==false)
            res.send("Failure");
        else if(data==true)
        {
            otp.remove(req.body.email,(error,dataa)=>{
                if(error)
                    res.send(error);
                else
                    res.send("Success");
            })
        }
    })
});











module.exports = router;