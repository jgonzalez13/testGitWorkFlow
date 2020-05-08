import React from 'react';
import Saludo from './componets/Saludo'
import Footer from './componets/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Saludo name="Emmanuel" /> 
      <Footer />
    </div>
  );
}

export default App;
