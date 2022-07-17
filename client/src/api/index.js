// import axios which is used to connect the front end with back end api
// which develop for CRUD
import axios from 'axios';
// the usr of the api which is assign for the appi that we want to connect
const url = "http://localhost:5000/todos";

//call the developed api that responnsible for reading informatio aof the todo
export const readTodo = () =>axios.get(url)
export const createTodo = newTodo => axios.post(url, newTodo);