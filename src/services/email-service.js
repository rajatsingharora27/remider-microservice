const sender = require("../config/email-config");

const sendBasicEmail = (mailFrom, mailTo, subject, body) => {
  sender.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: subject,
    text: body,
  });
};

module.exports = sendBasicEmail;
