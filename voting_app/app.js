require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes'); // Centralized routes file

const app = express();
app.use(bodyParser.json());

// Use centralized routes
app.use('/api', routes);

// Sync DB and Start Server
db.sequelize.sync({ force: false }).then(() => {
  console.log('Database connected!');
  app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000'));
});
