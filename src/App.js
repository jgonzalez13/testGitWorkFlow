
import React from 'react';
import Saludo from './componets/Saludo'
import Nav from './componets/Nav'
import Head from './header'
import Footer from './componets/Footer'
import './App.css';

function App() {
  return (

    <div className="App">
      <Head />
      <Saludo name="Emmanuel" />
      <Nav></Nav>
      <Footer />
    </div>
  );
}

export default App;