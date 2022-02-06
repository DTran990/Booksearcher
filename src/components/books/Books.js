import React from 'react';
import '../../css/Books.css';
import { connect } from 'react-redux';


const Books = (props) => {
  let books = props.books;
  return (
    <div id="books-container">
        { books && books.map((b) => {
            return (b.items && b.items.map((book) =>{
              return (
                  <div id='book-container' key={book.id}>
                      
                  </div> 
              )
            })
        )})}
    </div>
  )
};

const mapStateToProps = (state) =>{
  return {
    books: state.books
  }
}
export default connect(mapStateToProps)(Books);
