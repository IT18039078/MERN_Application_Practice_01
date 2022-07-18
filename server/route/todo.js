import express from 'express';
import { createTodo, readTodo, updateTodo } from '../controller/todos.js';

const router = express.Router();
router.get('/', readTodo);
router.post('/', createTodo);
router.patch('/:id', updateTodo)

export default router;