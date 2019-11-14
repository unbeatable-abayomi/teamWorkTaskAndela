import React from 'react';
// import logo from './logo.svg';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar/>
        <Login/>
        <SignUp/>
      </header>
    </div>
  );
}

export default App;
