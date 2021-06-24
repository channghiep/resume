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
        <div className="main-switcher">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Projects}/>
            <Route exact path='/about' component={About}/>  
    
          </Switch> 
        </div>
      </Router>

      }
      
      
    </div>
  );
}

export default App;
