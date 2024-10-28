import nodemailer from 'nodemailer';
import htmlContact from '../template/contact.js';

const config = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: 'doomangle1@gmail.com',
    pass: 'wtiq cidh ikci jflh',
  },
};

const contactPortfolio = (req, res) => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'doomangle1@gmail.com',
      pass: 'ynzptutppnptexkt',
    },
  };
  let transporter = nodemailer.createTransport(config);

  
    var name= req.body.name;
    var email= req.body.email;
    var subject= req.body.subject;
    var details= req.body.details;

  let mailOption = {
    from: 'Rauliqbal Website <doomangle1@gmail.com>',
    to: 'muhamadrauliqbal.13@gmail.com',
    subject: `Receive a message from ${name}`,
    html: htmlContact(name, email, subject, details),
  };

  transporter.sendMail(mailOption, (err, info) => {
    
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json({ message: `Email ${info.response} Terkirim!` });
    }
  });
};

export default contactPortfolio;

