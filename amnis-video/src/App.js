import HomePage from './WebPages/HomePage';
import Navbar from './Header/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddVideo from './VideoComponents/AddVideo';
import VideoDetails from './VideoComponents/VideoDetails';
import Error404 from './WebPages/Error404';
import SignUp from './WebPages/SignUp';
import Login from './WebPages/Login';
import SignInOutTab from './WebPages/SignInOutTab';
import TestPage from './WebPages/TestPage';


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
              <Route path = "/TestPage">
                <TestPage/>
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
