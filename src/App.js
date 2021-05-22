import Navbar from './Navbar'
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './CreateBlog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create_blog">
              <CreateBlog/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
