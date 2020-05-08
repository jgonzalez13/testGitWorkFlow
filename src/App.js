
import React from 'react';
import Saludo from './componets/Saludo'
import Head from './header'
import './App.css';

function App() {
  return (

    <div className="App">
      <Head />
      <Saludo name="Emmanuel" />
    </div>
  );
}

export default App;