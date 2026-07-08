import { body, param, validationResult } from 'express-validator';

// Rules for creating a task
export const validateCreateTask = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'done'])
    .withMessage('Status must be pending, in-progress, or done'),
];

// Rules for updating a task
export const validateUpdateTask = [
  body('title')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Title cannot be empty'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'done'])
    .withMessage('Status must be pending, in-progress, or done'),
];

// Rule for checking valid mongo id in the url
export const validateTaskId = [
  param('id').isMongoId().withMessage('Invalid task id'),
];

// Middleware that actually checks for errors and stops the request if any
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'fail',
      errors: errors.array().map((e) => e.msg),
    });
  }
  next();
};