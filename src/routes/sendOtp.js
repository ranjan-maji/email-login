const express = require('express');
const router = new express.Router();

const sendotp = require('../middleware/sendotp');
const generate = require('../middleware/generate');
const otp = require('../controllers/otp');



router.post('/send',(req,res) => {
    const x=generate.generateOtp();
    const mailOptions={
        from: 'ranjanmai96@gmail.com',
        to: req.body.email,
        subject: 'Email Verification',
        html: 'Your OTP for Email Verification is <b>'+x+'</b>'
    };
    sendotp.send(mailOptions,(err)=>{
        if(err)
            res.send(err);
        else
        {
            otp.save(req.body.email,x,(error)=>{
                if(error)
                    
                res.send('verifyOtp',{email:req.body.email});
            });
        }
    });
});


router.post('/api/send',(req,res)=>{
    const x=generate.generateOtp();
    const mailOptions={
        from: 'ranjanmai96@gmail.com',
        to: req.body.email,
        subject: 'Email Verification',
        html: 'Your OTP for Email Verification is <b>'+x+'</b>'
    };
    sendotp.send(mailOptions,(err)=>{
        if(err)
            res.send(err);
        otp.save(req.body.email,x,(error)=>{
            if(error)
                res.send(error);
            res.end();
        });
    });
});







module.exports = router;