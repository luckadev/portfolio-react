import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
//components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Posts from './pages/Posts';
import Skills from './pages/Skills';
import Contato from './pages/Contato';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/projetos' element={<Projetos/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contato' element={<Contato/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp;