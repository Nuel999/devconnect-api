const express = require('express');
const router = express.Router();

const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  likeOrUnlikePost,
  getPostsByUser
} = require('../controllers/postController');

const authenticate = require('../middleware/authMiddleware');
const validate = require('../middleware/validate'); // Joi middleware
const { createPostSchema, updatePostSchema } = require('../validation/postValidation'); // Joi schemas

// Create a new post
router.post('/', authenticate, validate(createPostSchema), createPost);
// Update a post
router.put('/:id', authenticate, validate(updatePostSchema), updatePost);
// Get posts created by logged-in user
router.get('/user', authenticate, getPostsByUser);

// Get all posts
router.get('/', getAllPosts);

// Get a single post by ID
router.get('/:id', getPostById);

// Delete a post
router.delete('/:id', authenticate, deletePost);

// Like or Unlike a post
router.post('/:id/like', authenticate, likeOrUnlikePost);

module.exports = router;
