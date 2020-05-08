import React from 'react';
import Saludo from './componets/Saludo'
import Nav from './componets/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Saludo name="Emmanuel" />
      <Nav></Nav>
    </div>
  );
}

export default App;
