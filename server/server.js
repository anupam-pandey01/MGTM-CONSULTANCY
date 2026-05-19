const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const mainRouter = require('./routes/main.router');

dotenv.config();
const app = express();

// Connect to Database
// Name Your Database into ".env file"
connectDB();


// Middleware
app.use(cors());
app.use(express.json());
app.use(mainRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));