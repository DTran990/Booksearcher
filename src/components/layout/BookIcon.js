import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import '../../css/BookIcon.css';

const BookIcon = () => {
  return <div id="bookicon"><FontAwesomeIcon id="icon" icon={faBookReader} size="8x"></FontAwesomeIcon></div>};

export default BookIcon;
