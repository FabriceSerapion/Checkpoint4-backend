const express = require('express');
const cors = require('cors');

const app = express();
const env = require('./config/env');
// const setupRoutes = require('./routes/index');

app.use(cors());
app.use(express.json());

// setupRoutes(app);

app.listen(env.PORT, env.HOSTNAME, () => {
  console.log(`Serveur turn to ${env.HOSTNAME}:${env.PORT}`);
});