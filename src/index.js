const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const sendBasicEmail = require("./services/email-service");

const setupServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log("server started at port ", PORT);
    sendBasicEmail(
      "support@example.com",
      "rajatsingharora007@gmail.com",
      "support",
      "body"
    );
  });
};

setupServer();
