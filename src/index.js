const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const setupServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const app = express();
  app.listen(PORT, () => {
    console.log("server started at port ", PORT);
  });
};

setupServer();
