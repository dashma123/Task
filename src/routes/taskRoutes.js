import express from 'express';
import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';
import {
  validateCreateTask,
  validateUpdateTask,
  validateTaskId,
  handleValidationErrors,
} from '../middleware/taskValidator.js';

const router = express.Router();

router
  .route('/')
  .post(validateCreateTask, handleValidationErrors, createTask)
  .get(getTasks);

router
  .route('/:id')
  .get(validateTaskId, handleValidationErrors, getTask)
  .patch(validateTaskId, validateUpdateTask, handleValidationErrors, updateTask)
  .delete(validateTaskId, handleValidationErrors, deleteTask);

export default router;