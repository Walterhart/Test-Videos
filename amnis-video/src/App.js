import HomePage from './Pages/HomePage';
import Navbar from './Header/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddVideo from './VideoComponents/AddVideo';
import VideoDetails from './VideoComponents/VideoDetails';
import Error404 from './Pages/Error404';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import SignInOutTab from './Pages/SignInOutTab';
import TestPage from './Pages/TestPage';



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
