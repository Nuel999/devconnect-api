const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');
const validate = require('../middleware/validate'); // ✅ import validation middleware
const { registerSchema, loginSchema } = require('../validation/authValidation'); // ✅ import Joi schemas

// Test route
router.get('/test', (req, res) => {
  res.send('✅ Auth route working!');
});

// Register route with validation
router.post('/register', validate(registerSchema), registerUser);

// Login route with validation
router.post('/login', validate(loginSchema), loginUser);

// Protected profile route
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: `Welcome user ${req.user.userId}` });
});

module.exports = router;
