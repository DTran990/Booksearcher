import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return <form>
        <p>Search the name of the book, author, or publisher!</p>
        <input type="search" placeholder="Search author, book name, publisher..."/>
        <button type="submit"><FontAwesomeIcon icon={faSearch} size="2x"/></button>
  </form>;
};

export default Search;
