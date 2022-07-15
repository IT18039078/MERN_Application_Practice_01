import mongoose from 'mongoose';

//creating the schema instance 
const Schema = mongoose.Schema
//creating schema for todo model
const todoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content: String
}, {timestamps: true})

//making the model from the schema 
const Todo = mongoose.model('Todo', todoSchema)
//export the model to import where ever want 
export default Todo;