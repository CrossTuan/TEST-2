const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { addTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todoControllers');
const router = express.Router();

router.get('/', authMiddleware, getTodos);
router.post('/', authMiddleware, addTodo);
router.put('/:id', authMiddleware, updateTodo);
router.delete('/:id', authMiddleware, deleteTodo);

module.exports = router;