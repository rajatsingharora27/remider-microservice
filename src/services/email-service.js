const sender = require("../config/email-config");
const UserMailRepository = require("../repository/userMail");

const sendBasicEmail = (mailFrom, mailTo, subject, body) => {
  sender.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: subject,
    text: body,
  });
};

const createEmail = async (data) => {
  try {
    let databody = data;
    databody = {
      ...databody,
      notificationTime: new Date(databody.notificationTime).toISOString(),
    };
    const userMail = await UserMailRepository.createEmail(databody);
    return userMail;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//Fetch  the pending emails

const fetchPendingEmails = async (timestamp) => {
  try {
    const pendingMails = await UserMailRepository.fetchPendingEmails({
      status: "PENDING",
    });
    return pendingMails;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateEmailStatus = async (ticketId, data) => {
  try {
    const response = await UserMailRepository.updateEmailStatus(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicEmail,
  createEmail,
  fetchPendingEmails,
  updateEmailStatus,
};
