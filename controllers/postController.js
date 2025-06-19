const Post = require('../models/post');
const { successResponse, errorResponse } = require('../utils/responseHandler.');

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private
const createPost = async (req, res) => {
  const { title, desc, previewPix, detailedPix } = req.body;

  if (!title || !desc || !previewPix || !detailedPix) {
    return errorResponse(res, 400, 'All fields are required');
  }

  try {
    const newPost = await Post.create({
      creator: req.user.userId,
      title,
      desc,
      previewPix,
      detailedPix,
    });

    return successResponse(res, 201, newPost, 'Post created successfully');
  } catch (err) {
    return errorResponse(res, 500, 'Server error while creating post', err.message);
  }
};

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return successResponse(res, 200, posts, 'Posts fetched successfully');
  } catch (err) {
    return errorResponse(res, 500, 'Server error while fetching posts', err.message);
  }
};

// @desc    Get single post by ID
// @route   GET /api/posts/:id
// @access  Public
const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return errorResponse(res, 404, 'Post not found');
    }
    return successResponse(res, 200, post, 'Post fetched successfully');
  } catch (err) {
    return errorResponse(res, 500, 'Server error while fetching post by ID', err.message);
  }
};

// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    if (!post) {
      return errorResponse(res, 404, 'Post not found');
    }

    if (post.creator.toString() !== req.user.userId) {
      return errorResponse(res, 403, 'You are not authorized to update this post');
    }

    const { title, desc, previewPix, detailedPix } = req.body;
    if (title) post.title = title;
    if (desc) post.desc = desc;
    if (previewPix) post.previewPix = previewPix;
    if (detailedPix) post.detailedPix = detailedPix;

    const updatedPost = await post.save();
    return successResponse(res, 200, updatedPost, 'Post updated successfully');
  } catch (err) {
    return errorResponse(res, 500, 'Server error while updating post', err.message);
  }
};

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return errorResponse(res, 404, 'Post not found');
    }

    if (post.creator.toString() !== req.user.userId) {
      return errorResponse(res, 403, 'Not authorized to delete this post');
    }

    await post.deleteOne();
    return successResponse(res, 200, null, 'Post deleted successfully');
  } catch (err) {
    return errorResponse(res, 500, 'Server error while deleting post', err.message);
  }
};

// @desc    Like or unlike a post
// @route   PUT /api/posts/:id/like
// @access  Private
const likeOrUnlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return errorResponse(res, 404, 'Post not found');
    }

    const userId = req.user.userId;

    if (post.likes.includes(userId)) {
      post.likes = post.likes.filter(id => id.toString() !== userId);
      await post.save();
      return successResponse(res, 200, post, 'Post unliked');
    }

    post.likes.push(userId);
    await post.save();
    return successResponse(res, 200, post, 'Post liked');
  } catch (err) {
    return errorResponse(res, 500, 'Server error while liking/unliking post', err.message);
  }
};

// @desc    Get posts by logged-in user
// @route   GET /api/posts/user
// @access  Private
const getPostsByUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    const posts = await Post.find({ creator: userId }).sort({ createdAt: -1 });
    return successResponse(res, 200, posts, 'Posts fetched successfully');
  } catch (err) {
    return errorResponse(res, 500, 'Server error while fetching post by user', err.message);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  likeOrUnlikePost,
  getPostsByUser,
};
