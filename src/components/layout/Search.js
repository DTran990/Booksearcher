import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bookSearch } from '../store/actions/bookActions';
import '../../css/Search.css';

const Search = (props) => {
  //Sets state of the currect search entry and type of book attribute

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userSearch = document.getElementById("search").value;
    let searchType = document.getElementById("dropdown").value
    //Calls dispatch function
    props.bookSearch({userSearch, searchType})
    navigate("/books");
  }
  //On form submission, calls function handleSubmit
  return <form id="searchform" onSubmit={handleSubmit}>
        <p>Search for any book you like!</p>
        <div id="bar">
          <select name="searchtype" id="dropdown">
            <option value="Title">Title</option>
            <option value="Author">Author</option>       
            <option value="Publisher">Publisher</option>
            <option value="Subject">Subject</option>
            <option value="ISBN">ISBN</option>
            <option value="LCCN">LCCN</option>
            <option value="OCLC">OCLC</option>
          </select>
          <input type="search" name="search" id="search" placeholder="Search..."/>
          <button type="submit" tabIndex="-1"><FontAwesomeIcon icon={faSearch} size="2x"/></button>
        </div>
  </form>;
};

//Function that dispatches an action to the reducer
const mapDispatchToProps = (dispatch) => {
  //returns an object which maps to the bookSearch action creator first, before dispatching to reducer
  return {
    //Sends the parameter of object books to bookSearch action creator
      bookSearch: (books) => dispatch(bookSearch(books))
  }
}

//connects component to store
export default connect(null, mapDispatchToProps)(Search);
