import { useEffect, useState } from "react";
import Preloader from "./component/preloader";
import { createTodo, readTodos } from "./functions";


function App() {

  // add state for the todo - which is going to have the form details
  const [todo, setTodo] = useState({title:'', content:''})
  useEffect(()=>{
    const fetchData = async()=>{
      const result = await readTodos();
      console.log(result)
    }
   fetchData()
  }, [])

  // function to handle the form - onsumbit 
  const onSubmitHandler =  async(e)=>{
      e.preventDefault();

      const result  = await createTodo(todo)
      console.log(result)    
  }
  
  return (
    <div className="container">
       <div className="row">
        <pre>
          {JSON.stringify(todo)}
        </pre>
        <form className="col s12" onSubmit={onSubmitHandler}>
          <div className="row">
            {/* title  */}
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input id="icon_prefix" type="text" className="validate" 
                onChange={e=>setTodo({...todo, title:e.target.value})}
              />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            {/* content */}
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input id="icon_telephone" type="tel" className="validate" 
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
        <Preloader/>
        {/* simple collection that hold the informatio about the todo */}
        <div className="collection">
          <a href="#!" className="collection-item">Alvin</a>
          <a href="#!" className="collection-item active">Alvin</a>
          <a href="#!" className="collection-item">Alvin</a>
          <a href="#!" className="collection-item">Alvin</a>
        </div>

      </div>
    </div>
  );
}

export default App;
