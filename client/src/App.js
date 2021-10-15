import React from "react";
import { useState , useEffect} from "react";
import { getCurrentUser } from "./components/auth/auth";
import Home from './components/static/Home'
import Profile from "./components/static/Profile";
import Navbar from "./components/navigation/Navbar";
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Session from "./components/sessions/Session"
import NewPet from "./components/pets/NewPet";
function App() {
  
  
  const [ currentUser, setCurrentUser ] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const handleCurrentUser = (user) => {
    if(user.name) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
      alert(`welcome ${user.name} `)
      
    }
  }
  const logoutCurrentUser = ()=>{
    setCurrentUser(null);
    setLoggedIn(false);
    setLoading(false);
  }

  useEffect(() => {
    getCurrentUser(handleCurrentUser)
  }, [])
 
    

  return (
    <>  
        <Router>
          <Navbar loggedIn={loggedIn} logoutCurrentUser={logoutCurrentUser} />
      
        <Switch>
          <Route exact path="/" render ={props => <Home loggedIn={loggedIn}/>} />
          <Route exact path="/new"  render ={props => <NewPet currentUser = {currentUser} />} />
          <Route exact path="/me" render ={ props =>  <Profile {...props} currentUser = {currentUser} loading={loading} setLoading={setLoading} setCurrentUser={setCurrentUser}/> } />
          <Route exact path="/signup" render ={ props =>  <Session {...props} handleCurrentUser = { handleCurrentUser }/> } />
          <Route exact path="/login" render ={ props =>  <Session {...props} handleCurrentUser = { handleCurrentUser }/> } />
          <Router render={ () => <h1>Bad route</h1> } />
            </Switch>
          </Router>
    
    </>
  );
}

export default App;
