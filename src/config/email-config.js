const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rajatsingharora007@gmail.com",
    pass: "wtqlpvtlmelhhrhf",
  },
});

module.exports = sender;
