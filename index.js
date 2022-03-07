const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./src/database/config');
const routes = require('./src/routes/principal.routes');

const app = express();

dbConnection();

app.use(cors());

app.use(express.json());

app.use('/api', routes);

app.listen(8080, () => {
    console.log('Server running in port ', 8080);
});