const express = require('express');
const router = new express.Router();

const sendotp = require('../middleware/sendotp');
const generate = require('../middleware/generate');
const otp = require('../controllers/otp');



router.post('/send',(req,res) => {
    const set=generate.generateOtp();
    const mailOptions={
        from: 'ranjanmai96@gmail.com',
        to: req.body.email,
        subject: 'Email Verification',
        html: 'Your OTP for Email Verification is <b>'+set+'</b>'
    };
    sendotp.send(mailOptions,(err,data)=>{
        if(err)
            res.send(err);
        else
        {
            otp.save(req.body.email,set,(error,dataa)=>{
                if(error)
                    res.send(error);
                res.render('verifyOtp.ejs',{email:req.body.email});
            });
        }
    });
});


router.post('/api/send',(req,res)=>{
    var x=generate.generateOtp();
    var mailOptions={
        from: 'ranjanmai96@gmail.com',
        to: req.body.email,
        subject: 'Email Verification',
        html: 'Your OTP for Email Verification is <b>'+x+'</b>'
    };
    sendotp.send(mailOptions,(err,data)=>{
        if(err)
            res.send(err);
        otp.save(req.body.email,x,(error,dataa)=>{
            if(error)
                res.send(error);
            res.end();
        });
    });
});







module.exports = router;