import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../css/Search.css';

const Search = () => {
  return <form id="searchform">
        <p>Search the name of the book, author, or publisher!</p>
        <div id="bar">
          <input type="search" placeholder="Search author, book name, publisher..."/>
          <button type="submit"><FontAwesomeIcon icon={faSearch} size="2x"/></button>
        </div>
  </form>;
};

export default Search;
