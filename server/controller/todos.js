import mongoose from "mongoose";
import Todo from "../models/todos.js";

// READ INFORMATION FROM THE DATABASE
export const readTodo = async(req, res)=>{
    try {
        // find informatio from the mongo database
        const todo = await Todo.find()
        // senginh the information as response to the request 
        res.status(200).json(todo)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

// POST OR INSERT INFORMATION TO THE DATABASE
export const createTodo = async (req, res)=>{
    // getting information from the frontend and save the data i variable
    const todo = new Todo(req.body)
    try {
        await todo.save()
        res.status(201).json(todo)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

