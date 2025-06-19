const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

// Load environment variables
dotenv.config();

const app = express();

//  Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

//  Rate Limiting - 100 requests per 15 min per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
});
app.use(limiter);

//  Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

//  DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' MongoDB connected');
  app.listen(process.env.PORT, () => {
    console.log(` Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => console.error(' MongoDB connection error:', err));
