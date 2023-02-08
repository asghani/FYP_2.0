import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import Contact from './pages/Contact';
import Data from './Data';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <> 
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/Women' element={<Women/>}> </Route>
      <Route path='/Men' element={<Men/>}> </Route>
      <Route path='/Contact' element={<Contact/>}> </Route>
      <Route path='/About' element={<About/>}> </Route>
    </Routes>

    </>
  );
}

export default App;
