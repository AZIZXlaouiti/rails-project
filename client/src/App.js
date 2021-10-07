import React from "react";
import { useState } from "react";
import Home from './components/static/Home'
import About from "./components/navigation/about";
import Navbar from "./components/navigation/Navbar";
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
function App() {
  const [clicked, setClicked ] = useState(false)
  const handleClick = ()=>{
    setClicked(!clicked)
  }
  return (
    <>  
        <Router>
          <Navbar/>
          <div className='main'>
          <Switch>
         <About show={clicked}/> 
            <Route exact path='/'>
            </Route>
            <Route exact path='/login'>
              <p>login</p>
            </Route>
            <Route exact path='/signup'>
            </Route>
            </Switch>
           <Home about={handleClick}/>
          </div>
          </Router>
    
    </>
  );
}

export default App;
