import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bookSearch } from '../store/actions/bookActions';
import '../../css/Search.css';

const Search = (props) => {

  const [userSearch, setSearch] = useState('');
  const [searchType, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(document.getElementById("search").value);
    setType(document.getElementById("dropdown").value)
    props.bookSearch({userSearch, searchType})
  }

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
          <button type="submit"><FontAwesomeIcon icon={faSearch} size="2x"/></button>
        </div>
  </form>;
};

const mapDispatchToProps = (dispatch) => {
  return {
      bookSearch: (books) => dispatch(bookSearch(books))
  }
}

export default connect(null, mapDispatchToProps)(Search);
