
import React from 'react';
import Saludo from './componets/Saludo'
import Head from './header'
import Footer from './componets/Footer'
import './App.css';

function App() {
  return (

    <div className="App">
      <Head />
      <Saludo name="Emmanuel" />
      <Footer />

    </div>
  );
}

export default App;