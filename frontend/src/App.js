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
function App() {

  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <ApolloProvider client={client}>
    //       <Container style={{
    //         background: 'linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)',
    //         height: '100vh',
    //         maxWidth: '100%'
    //       }}>
    //       <SiteHeader/>
    //       <Routes>
    //         <Route path='/' element={<HomePage />} />
    //         <Route path='/tag/:slug' element={<Tag />} />
    //         <Route path='/category/:slug' element={<Category />} />
    //         <Route path='/portfolio/:slug' element={<SinglePortfolio />} />
    //       </Routes>
    //       </Container>
    //     </ApolloProvider>
    //   </BrowserRouter>
    // </div>
    Blogwebsite()
  );
}
function Blogwebsite() {

  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Container style={{
            background: 'linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)',
            height: '100vh',
            maxWidth: '100%'
          }}>
          <SiteHeader/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tag/:slug' element={<Tag />} />
            <Route path='/category/:slug' element={<Category />} />
            <Route path='/portfolio/:slug' element={<SinglePortfolio />} />
          </Routes>
          </Container>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
