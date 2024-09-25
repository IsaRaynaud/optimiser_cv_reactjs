import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Copyright = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      onClick={scrollToTop}
      style={{
        width: '100%',
        backgroundColor: '#000',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        cursor: 'pointer'
      }}
    >
      <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffff",}} /> Designed by Jonh Doe.
    </div>
  );
};

export default Copyright;
