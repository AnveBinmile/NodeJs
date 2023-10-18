const express = require("express");
const app = express();
const expressWinston = require("express-winston");
const { transports, format } = require("winston");

app.use(
  expressWinston.logger({
    transports: [
      new transports.Console(),
      new transports.File({
        level: "warn",
        filename: "logWarnings.log",
      }),
      new transports.File({
        level: "error",
        filename: "logErrors.log",
      }),
    ],
    format: format.combine(
      format.json(),
      format.timestamp(),
      format.prettyPrint()
    ),
    statusLevels: true,
  })
);

app.use(
  expressWinston.errorLogger({
    transports: [
      new transports.File({
        filename: "logsInternalErrors.log",
      }),
    ],
    
    format: format.combine(
        format.json(),
        format.timestamp()
    )
  })
);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/400", (req, res) => {
  res.sendStatus(400);
});

app.get("/500", (req, res) => {
  res.sendStatus(500);
});

app.get("/error", (req, res) => {
  throw new Error("This is a customError");
});

app.listen(4000);
