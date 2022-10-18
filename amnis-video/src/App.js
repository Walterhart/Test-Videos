import HomePage from './HomePage';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddVideo from './AddVideo';
import VideoDetails from './VideoDetails';

function App() {
 
  return (
    <Router>
    <div className="App">
        <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path = "/">
                <HomePage/>
              </Route>
              <Route path = "/add-video">
                <AddVideo/>
              </Route>
              <Route path = "/videos/:id">
                <VideoDetails/>
              </Route>              
            </Switch>
          </div> 
    </div>
    </Router>
  );
}

export default App;
