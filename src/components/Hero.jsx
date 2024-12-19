import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

const Hero = ({ darkMode }) => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'Ngapain ngoding?..', 2000, 
            '', 1000,
          ]}
        />
      </h2>
      <div className="buttons">
        <button 
          className={`btn ${darkMode ? 'dark' : 'light'}`} 
          onClick={() => handleRedirect('https://www.facebook.com')}
        >
          Download
        </button>
        <button 
          className={`btn ${darkMode ? 'dark' : 'light'}`} 
          onClick={() => handleRedirect('https://www.facebook.com')}
        >
          Ayok Malas
        </button>
      </div>
    </motion.section>
  );
};

export default Hero;
