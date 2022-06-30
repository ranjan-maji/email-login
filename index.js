const express = require('express');
require('./src/db/conn');
const sendOtp = require('./src/routes/sendOtp');
const veriyOtp = require('./src/routes/verifyOtp');






const app = express();
const port = process.env.PORT || 8000


app.use(express.json())
app.use(sendOtp);
app.use(veriyOtp);




app.listen(port, () => {
    console.log(`connecting is setup at ${port}`);
})