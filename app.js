const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const clientAuthRoutes = require('./src/routes/clientAuthRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('src/uploads'));

app.use('/api/clientes', clientAuthRoutes);

module.exports = app;