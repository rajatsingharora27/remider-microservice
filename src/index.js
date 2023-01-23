const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const sendBasicEmail = require("./services/email-service");
// const EmailService = require("./services/email-service");
const EmailController = require("./controller/email-controller");
var cron = require("node-cron");
const setupJobs = require("./utils/nodeCron");

const setupServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post("/api/v1/tickets", EmailController.createEmail);
  app.listen(PORT, () => {
    console.log("server started at port ", PORT);
    setupJobs();
    // sendBasicEmail(
    //   "support@example.com",
    //   "rajatsingharora007@gmail.com",
    //   "support",
    //   "body"
    // );
    // cron.schedule("*/1 * * * *", () => {
    //   console.log("running a task every two minutes");
    // });
    // EmailService.createEmail({
    //   subject: "SUbject",
    //   content: "CONTENT",
    //   recepientEmail: "rajatsingharora007@gmail",
    //   notificationTime: new Date(),
    // });
  });
};

setupServer();
