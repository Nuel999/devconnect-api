const Joi = require('joi');

// Create Post Schema
const createPostSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  desc: Joi.string().min(10).required(),
  previewPix: Joi.string().uri().required(),
  detailedPix: Joi.string().uri().required()
});

// Update Post Schema (fields optional)
const updatePostSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  desc: Joi.string().min(10),
  previewPix: Joi.string().uri(),
  detailedPix: Joi.string().uri()
});

module.exports = {
  createPostSchema,
  updatePostSchema
};
