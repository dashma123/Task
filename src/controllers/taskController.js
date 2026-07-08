import Task from '../models/Task.js';

// Create a task
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ status: 'success', data: task });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

// Get all tasks (with filtering and pagination)
export const getTasks = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    // Build filter object
    const filter = {};
    if (status) {
      filter.status = status;
    }

    const pageNum = Math.max(parseInt(page), 1);
    const limitNum = Math.max(parseInt(limit), 1);
    const skip = (pageNum - 1) * limitNum;

    const [tasks, total] = await Promise.all([
      Task.find(filter).skip(skip).limit(limitNum),
      Task.countDocuments(filter),
    ]);

    res.status(200).json({
      status: 'success',
      results: tasks.length,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Get a single task by id
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ status: 'fail', message: 'Task not found' });
    }
    res.status(200).json({ status: 'success', data: task });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
  returnDocument: 'after',
  runValidators: true,
});
    
    
    if (!task) {
      return res.status(404).json({ status: 'fail', message: 'Task not found' });
    }
    res.status(200).json({ status: 'success', data: task });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ status: 'fail', message: 'Task not found' });
    }
    res.status(200).json({ status: 'success', data: null });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};