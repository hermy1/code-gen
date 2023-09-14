import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Outlet from './Router';
import { Router } from 'react-router-dom';

function App() {
  return (
   
    <div className="App">
     <Header />
     <div className="children">
      <Outlet />
     </div>
    </div>
 
  
  );
}

export default App;
