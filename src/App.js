import './css/App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Search from './components/layout/Search';
import Books from './components/books/Books';
import Book from './components/books/Book';
import BookIcon from './components/layout/BookIcon';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Search/>
        <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<BookIcon/>}></Route>
              <Route path='/Books' element={<Books/>}></Route>
              <Route path='/Book' element={<Book/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
