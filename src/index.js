require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const configureDI = require('./config/diContainer');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

function main() {
  const container = configureDI();
  const carController = container.get('CarController');
  carController.setupRoutes(app);

  app.listen(PORT || 8080, () => {
    console.log(`App listening on port ${PORT}`);
  });
}
main();
