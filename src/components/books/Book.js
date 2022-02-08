import React from 'react';
import '../../css/Book.css';
import { connect } from 'react-redux';

const Book = (props) => {
  let id = window.location.search.slice(4,);
  let book = props.books.map((b) => {
    return b.items.filter((item) => (item.id === id))
  })
  console.log('this is ', book[0][0])
  book = book[0][0];
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
          case 'categories':
            console.log(obj.volumeInfo.categories);
            test = obj.volumeInfo.categories.join(', ');
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
        case 'pages':
          console.log(obj.volumeInfo.pageCount);
          if (obj.volumeInfo.pageCount === undefined){
            test = "N/A";
          } else{
            test = obj.volumeInfo.pageCount;
          }
          break;
        case 'desc':
          console.log(obj.volumeInfo.description);
          if (obj.volumeInfo.description === undefined){
            test = "N/A";
          } else{
            test = obj.volumeInfo.description;
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
        case 'categories':
          test = 'N/A';
          break;
        case 'publishdate':
          test = "N/A";
          break;
        case 'pages':
          test = "N/A";
          break;
        case 'desc':
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
    <div id="Book">
        <img src={inObject(book,"thumbnail")} alt={book.volumeInfo.title} width="190px" height="260px"/>
        <div id="info">
          <h3>{book.volumeInfo.title}</h3>
          <p className='book-p'><span>Authors:</span> {inObject(book,'authors')}</p>
          <p className='book-p'><span>Date Published:</span> {inObject(book, 'publishdate')}</p>
          <p className='book-p'><span>Publisher:</span> {inObject(book, 'publisher')}</p>
          <p className='book-p'><span>Categories:</span> {inObject(book,'categories')}</p>
          <p className='book-p'><span>Page Count:</span> {inObject(book,'pages')}</p>
        </div>
        <div id="desc">
          <h3>Book Description</h3>
          <p className='book-p'>{inObject(book,'desc')}</p>
        </div>
    </div>
)};

const mapStateToProps = (state) =>{
  return {
    books: state.books
  }
}
export default connect(mapStateToProps)(Book);
