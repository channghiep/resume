import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
// Import components
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import LoadingLottie from './components/lottie/loadinglottie';
import About from './components/about/about';
// 

function App() {
  const [loading, setLoading] = useState(true)
  const[tog, setTog] =useState(false)
  useEffect(() => {
    const timer =  setTimeout(() => {
      setLoading(false)
    },2000)
    return () => clearTimeout(timer)
  },[])
 
  return (
    
    <div className="App">
      {loading ?
        <div class="preload-wrapper">
          <div class="preload-item">
            <LoadingLottie/> 
          </div>
        </div>
      :
      
      <Router>
        <Navbar tog={tog} setTog={setTog}/>
        <div className={`${tog ? "hide_main" : "main-switcher "}`}>
          <Switch>
            <Route exact path='/' component={About}/>  
            <Route exact path='/works' component={Projects}/>
    
          </Switch> 
        </div>
      </Router>

      }
      
      
    </div>
  );
}

export default App;
