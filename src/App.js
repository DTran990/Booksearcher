import './css/App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Search from './components/layout/Search';
import Books from './components/books/Books';
import Book from './components/books/Book';
import BookIcon from './components/layout/BookIcon';
import BacktoTop from './components/layout/BacktoTop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <div id="app-container">
              <Routes>
                  <Route path='/' element={<><Search/><BookIcon/></>}></Route>
                  <Route path='/search' element={<><Search/><Books/></>}></Route>
                  <Route path='/Book' element={<Book/>}></Route>
              </Routes>
          </div>
          <BacktoTop/>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
