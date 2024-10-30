import nodemailer from 'nodemailer';
import htmlContact from '../template/contact.js';



const contactPortfolio = (req, res) => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
  };
  let transporter = nodemailer.createTransport(config);


  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let details = req.body.details;

  const mailOption = {
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

