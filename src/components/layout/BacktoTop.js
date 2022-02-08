import React from 'react';
import '../../css/BacktoTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BacktoTop = () => {
  return <>
    <a href="#navlink" id="Top-btn"><FontAwesomeIcon icon={faArrowUp} size="2x"/></a>
  </>;
};


export default BacktoTop;
