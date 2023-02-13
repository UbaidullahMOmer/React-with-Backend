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
import { Container } from 'react-bootstrap';
import Blog from "./Website/Bolg"
function App() {

  return (
    <div className="App">
      <Blog />
    </div>
  );
}

export default App;
