const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
});


module.exports = transport;