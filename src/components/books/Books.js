import React from 'react';
import '../../css/Books.css';
import { connect } from 'react-redux';


const Books = (props) => {
  let books = props.books;
  const inObject = (obj,request) =>{
    let test = 'N/A';
    try {
      switch (request){
        case 'thumbnail':
          console.log(obj.volumeInfo.imageLinks.thumbnail);
          test = obj.volumeInfo.imageLinks.thumbnail;
          break;
        case 'authors':
          console.log(obj.volumeInfo.authors);
          test = obj.volumeInfo.authors.join(', ');
          break;
        case 'publishdate':
          console.log(obj.volumeInfo.publishedDate);
          if (obj.volumeInfo.publishedDate === undefined){
            test = "N/A";
          } else{
            test = obj.volumeInfo.publishedDate;
          }
          break;
        case 'publisher':
          console.log(obj.volumeInfo.publisher);
          if (obj.volumeInfo.publisher === undefined){
            test = "N/A";
          } else{
            test = obj.volumeInfo.publisher;
          }
          break;
        default:
          break;
      }
    }
    catch(err){
      console.log(obj.volumeInfo.title);
      switch (request){
        case 'thumbnail':
          test = "";
          break;
        case 'authors':
          test = 'N/A';
          break;
        case 'publishdate':
          test = "N/A";
          break;
        case 'publisher':
          test = "N/A";
          break;
        default:
          break;
      }
    }
    return test;
  }
  return (
    <div id="books-container">
        { books && books.map((b) => {
            return (b.items && b.items.map((book) =>{
              console.log(book)
              return (
                  <div id='book-container' key={book.id}>
                      <img src={inObject(book,"thumbnail")} alt={book.volumeInfo.title} width="128px" height="198px"/>
                      <div id="book-info">
                          <h3>{book.volumeInfo.title}</h3>
                          <p className='book-p'>Authors: {inObject(book,'authors')}</p>
                          <p className='book-p'>Date Published: {inObject(book, 'publishdate')}</p>
                          <p className='book-p'>Publisher: {inObject(book, 'publisher')}</p>
                          
                      </div>
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
