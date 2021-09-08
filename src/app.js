const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./utils/app_error");
const cors = require("cors");
const db = require("./db/db");
require("./db/db");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(cors());

//security
app.disable("x-powered-by");

//parsing json objects
app.use(express.json());
app.use((req, res, next) => {
  //cors handler
  res.header("Acces-Control-Allow-Origin", "*");
  res.header(
    "Acces-Control-Allow-Header",
    "Origin, X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization"
  );

  //allow only get/post methods
  if (req.method === "OPTIONS") {
    res.header("Acces-Control-Allow-Methods", "GET", "POST");
    return res.status(200).send({});
  }
  next();
});

//adding routes
// app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/movie", movieRoutes);

//404 NOT FOUND handler
app.use((req, res, next) => {
  next(new AppError("Not found", 404));
});

//ERROR HANDLER
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

module.exports = app;
