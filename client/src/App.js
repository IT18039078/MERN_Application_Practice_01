import Preloader from "./component/preloader";

function App() {
  return (
    <div className="container">
       <div className="row">
        <form className="col s12">
          <div className="row">
            {/* title  */}
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            {/* content */}
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input id="icon_telephone" type="tel" className="validate" />
              <label htmlFor="icon_telephone">Content</label>
            </div>

          </div>
        </form>
        <Preloader/>
        {/* simple collection that hold the informatio about the todo */}
        <div class="collection">
            <a href="#!" class="collection-item">Alvin</a>
            <a href="#!" class="collection-item active">Alvin</a>
            <a href="#!" class="collection-item">Alvin</a>
            <a href="#!" class="collection-item">Alvin</a>
        </div>
      </div>
    </div>
  );
}

export default App;
