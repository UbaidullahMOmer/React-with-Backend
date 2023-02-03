import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

import HomePage from "./pages/HomePage"
import Tag from "./pages/Tag"
import Category from "./pages/Category"

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/tag/:id' element={<Tag/>}  /> 
          <Route path='/category/:id' element={<Category/>}  /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
