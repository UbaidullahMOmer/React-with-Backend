import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import SinglePortfolio from './pages/SinglePortfolio';

import HomePage from "./pages/HomePage"
import Tag from "./pages/Tag"
import Category from "./pages/Category"
import { ApolloProvider } from '@apollo/client';
import client from './utils/apoloClient';
import SiteHeader from './components/SiteHeader';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <SiteHeader/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tag/:id' element={<Tag />} />
            <Route path='/category/:id' element={<Category />} />
            <Route path='/portfolio/:id' element={<SinglePortfolio />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
