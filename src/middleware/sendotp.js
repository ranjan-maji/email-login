const nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport({
	// service:'Yandex',
	// host: 'smtp.yandex.ru',
	// auth:{
	// 	user: 'ranjanmaji@yandex.com',
	// 	pass: 'jgxzkbgbmaykespp'
	// }
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: 'ranjanmai96@gmail.com',
		pass: 'yuaczdvpkhwzuhcw'
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