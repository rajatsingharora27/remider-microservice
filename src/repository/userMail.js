const { NotificationEmail } = require("../models/index");
const { Op } = require("sequelize");

/**
 * Need to save the email to send to the user
    with the timestamp
*/

const createEmail = async (emailData) => {
  try {
    console.log(emailData);

    const newEmail = await NotificationEmail.create(emailData);
    return newEmail;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchPendingEmails = async (data) => {
  try {
    const pendingEmails = await NotificationEmail.findAll({
      where: data,
      notificationTime: {
        [Op.lte]: new Date(),
      },
    });
    return pendingEmails;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateEmailStatus = async (ticketId, data) => {
  try {
    const ticket = await NotificationEmail.findByPk(ticketId);
    if (data.status) {
      ticket.status = data.status;
    }
    await ticket.save();
    return ticket;
  } catch (error) {
    throw error;
  }
};

module.exports = { createEmail, fetchPendingEmails, updateEmailStatus };
