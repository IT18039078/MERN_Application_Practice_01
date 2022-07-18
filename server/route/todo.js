import express from 'express';
import { createTodo, deleteTodo, readTodo, updateTodo } from '../controller/todos.js';

const router = express.Router();
// link the controller functio that response for the HTTP method function 
// and this fill called in the app.js file that is the initial file that 
// have all the server configurations
router.get('/', readTodo);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;