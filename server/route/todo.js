import express from 'express';
import { createTodo, readTodo } from '../controller/todos.js';

const router = express.Router();
router.get('/', readTodo);
router.post('/', createTodo);


export default router;