import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import Frontend from './Components/Frontend';
import Profile from './Components/Profile';

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
        <Route path='/Profile' component={Profile} />
       
      </header>
      <Route component={Error} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
