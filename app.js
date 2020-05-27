var createError = require("http-errors");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");

var app = express();
app.conf = require("./config/app");

// set up views engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("trust proxy", 1);
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
