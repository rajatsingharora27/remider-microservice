const emailService = require("../services/email-service");

const createEmail = async (req, res) => {
  try {
    const newEmail = await emailService.createEmail(req.body);
    res.status(201).json({
      error: {},
      message: "Email created successfully",
      data: newEmail,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "error in controller",
      data: {},
    });
  }
};

module.exports = {
  createEmail,
};
