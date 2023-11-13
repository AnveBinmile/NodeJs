const config = require("./config/config");
const cron = require("node-cron");
const Student = require("../Day7/models/student.model");
const nodemailer = require("nodemailer");
const to = require("await-to-js").default;

const retrieveAllUserMails = async () => {
  try {
    console.log("SendMailerAlUser");
    const studentData = await Student.findAll({
      where: {
        gender: "female",
      },
    });
    if (studentData.length > 0) {
      const emails = [];
      console.log("Student ", Array.isArray(studentData));
      studentData.map((key) => {
        emails.push(key.dataValues.email);
      });

      return emails;
    }
  } catch (err) {
    console.log(err);
  }
};

const sendMails = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: config.userConfig.emailUser,
      pass: config.userConfig.emailPassword,
    },
  });

  const [error, emails] = await to(retrieveAllUserMails());

  if (!error) {
    const mailOptions = {
      from: "beanbagger678@gmail.com",
      to: emails,
      subject: "HWD",
      html: "<p>Happy Women's Day</p>",
    };

    cron.schedule("* * * * * *", async function () {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Mail has been sent successfully ", info.response);
        }
      });
    });
  }
};

sendMails();

module.exports = { retrieveAllUserMails, sendMails };
