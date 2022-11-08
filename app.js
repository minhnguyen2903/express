const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const invoiceRouter = require("./routes/invoice");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser());

const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
    db.users.sync();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use("/api-docs", swaggerUi.serve);

app.use("/api/v1", indexRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/invoices", invoiceRouter);
app.use("/api/v1/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
