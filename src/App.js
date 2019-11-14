import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import Frontend from './Components/Frontend';
// import Login from './Components/Login';
// import Navbar from './Components/Navbar';

import SignUp from './Components/SignUp';

import './App.css';

const Error =()=>{
  return (
    <div>
       <h1>Error: The path doesn't exist</h1>
       
       
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Switch>
      <header className="App-header">
        <Route path='/' component={Frontend} exact/>
        <Route path='/SignUp' component={SignUp} />
       
      </header>
      <Route component={Error} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
