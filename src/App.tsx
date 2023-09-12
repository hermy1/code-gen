import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Router from './Router';

function App() {
  return (
  
    <div className="App">
     <Header />
     <div className="children">
        <h1>Children</h1>
     </div>
    </div>
  
  );
}

export default App;
