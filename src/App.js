import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <div className='header'>
          <h1>
            React Crud Operations
          </h1>
        </div>
        <div className='main'>
          <Route exact path='/'  >
            <Create/>
            <Read/>
          </Route>
          <div>
          <Route exact path='/create' component={Create}/>
          </div>
          <div>
          <Route exact path='/read' component={Read}/>
          </div>
          <div>
          <Route exact path='/update' component={Update}/>
          </div>
          <div>
          <Route exact path='/delete' component={Delete}/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
