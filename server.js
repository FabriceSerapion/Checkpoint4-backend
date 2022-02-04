const express = require("express");
const cors = require("cors");

const app = express();
const env = require("./config/env");

require("dotenv").config();
const { configmail } = require("./config/envmail");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const setupRoutes = require("./routes/index");

const datasApp = require("./datas/index");

app.use(cors());
app.use(express.json());

setupRoutes(app);

// =======================GESTION DE L'ENVOI DE MAIL=================================

app.post("/contact", cors(), async (req, res) => {
  let { text, email, objet } = req.body;
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: configmail.DB_MAIL,
      pass: configmail.DB_PASSWORD_MAIL,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transport.sendMail(
    {
      from: `${email}`,
      to: configmail.DB_MAIL,
      subject: `${objet}`,
      text: "Hello world!!",
      html: `<b>Hello world!!</b>
      <p>${text}</p>`,
    },
    (err, res) => {
      if (err) console.log(err);
      if (res) res.status(200);
    }
  );
});

// ======================================================================================

app.listen(env.PORT, env.HOSTNAME, () => {
  console.log(`Serveur turn to ${env.HOSTNAME}:${env.PORT}`);
});
