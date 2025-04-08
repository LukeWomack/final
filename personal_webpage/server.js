const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const indexRoutes = require('/routes/index');

dotenv.config();

const app = express();
const PORT = process.env.port || 3000;

//DB config
require('./config/db')();

//middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// importing routes
app.use('/', indexRoutes);

//start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));