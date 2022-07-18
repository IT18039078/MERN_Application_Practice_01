import { useEffect, useState } from "react";
import Preloader from "./component/preloader";
import { createTodo, readTodos } from "./functions";


function App() {

  // add state for the todo - which is going to have the form details
  const [todo, setTodo] = useState({title:'', content:''})

  // todos state for printing the details in list
  const [todos, setTodos] = useState(null) 

  // Get the current id of item printed
  const [currentId, setCurrentId] = useState(0)
  
  useEffect(()=>{
      let currentTodo = currentId != 0 ? todos.find(todo=>todo._id === currentId):{title: '', content:''}
      setTodo(currentTodo)
  },[currentId])

  useEffect(()=>{
    const fetchData = async()=>{
      const result = await readTodos();
      
      setTodos(result)
    }
    fetchData()
  }, [])


  const clear = () =>{
    setCurrentId(0);
    setTodo({title:'', content:''});
  }

  useEffect(()=>{
    const clearField = (e) =>{
      if(e.keyCode === 27){
        clear()
      }
    }
    window.addEventListener('keydown', clearField)
    return ()=> window.removeEventListener('keydown', clearField)
  },[])
  // function to handle the form - onsumbit 
  const onSubmitHandler =  async(e)=>{
      e.preventDefault();

      const result  = await createTodo(todo)
      setTodos([...todos,result])    
  }
  
  return (
    <div className="container">
       <div className="row">
{/*         
        This preview section for showing the form details in the front to confirm that 
        we getting the form data when chaning it */}
        <pre>
          {JSON.stringify(todo)}
        </pre>
        <form className="col s12" onSubmit={onSubmitHandler}>
          <div className="row">
            {/* title  */}
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input id="icon_prefix" type="text" className="validate" 
              value={todo.title}
                onChange={e=>setTodo({...todo, title:e.target.value})}
              />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            {/* content */}
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input id="icon_telephone" type="tel" className="validate" 
              value={todo.content}
                onChange={e=>setTodo({...todo, content:e.target.value})}
              />
              <label htmlFor="icon_telephone">Content</label>
            </div>
          </div>
          <div className="row right-align"> 
             <button className="waves-effect waves-light btn">
                Submit
             </button>
          </div>
        </form>
        
        {
          !todos ? <Preloader/> : todos.length > 0 ? <div className="collection">
            {todos.map((todo)=>(
              <li key = {todo._id} onClick={()=>setCurrentId(todo._id)}
              className="collection-item" style={{listStyle:'none'}}>
                <div><h5>{todo.title}</h5>
                <p> {todo.content}
                <a href="#!" className="secondary-content">
                <i className="material-icons">delete</i>
                </a></p></div>
              </li>  
            ))}
        </div>:<div><h5>Nothing to Do</h5></div>
        }
    
        

      </div>
    </div>
  );
}

export default App;
