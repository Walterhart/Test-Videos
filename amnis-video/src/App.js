import HomePage from './HomePage';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddVideo from './AddVideo';
import VideoDetails from './VideoDetails';
import Error404 from './Error404';
import SignUp from './SignUp';
import Login from './Login';
import SignInOutTab from './SignInOutTab';


function App() {
 
  return (
   
    <Router>
      
    <div className="App">
      <div className="header">                   
          <Navbar/>
        
      </div>
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
              <Route path = "/Login">
                <Login/>
              </Route> 
              <Route path = "/SignInOutTab">
                <SignInOutTab/>
              </Route> 
              <Route path = "/Sign-up">
                <SignUp/>
              </Route>  
              <Route path = "*">
                <Error404/>
              </Route>          
            </Switch>
          </div> 
    </div>
    </Router>
  );
}

export default App;
