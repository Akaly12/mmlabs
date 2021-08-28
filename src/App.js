import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Herder';
import Footer from './components/Footer';

import Login from './pages/Login';

import Routes from './Routes'

import './App.css'

function App(){

   const [user, setUser] = useState(2);
   
  return (
      <BrowserRouter>  
        <Header />

        <Routes />

        <Footer />
        </BrowserRouter>

  );
} 

export default App;


