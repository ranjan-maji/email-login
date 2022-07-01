
const nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'gsmtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: 'ranjanmai96@gmail.com',
		pass: 'wzwypriqayjwpxyg'
	}
});

exports.send = (mailOptions,cb)=>
{
	transporter.sendMail(mailOptions,(err,info)=>{
		if(err)
			cb(err);
		cb(null,info);
	});
}