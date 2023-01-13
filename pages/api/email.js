import nodemailer from "nodemailer";
export default function handler(req, res) {
  const { name, email } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Form filled by ${name}`,
    text: `Name:${name}\nEmail:${email}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(401).json({ info: info.response });
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).json({ info: info.response });
    }
  });
}
