import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

const Header = ({ darkMode, toggleMode }) => {
  const iconStyle = {
    width: '24px',
    height: '24px',
    fill: darkMode ? '#f0f0f0' : '#333', // Warna ikon berdasarkan mode
    transition: 'fill 0.3s'
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h1>Malas.Ah</h1>
      <button onClick={toggleMode} className="mode-toggle">
        {darkMode ? <SunIcon style={iconStyle} /> : <MoonIcon style={iconStyle} />}
      </button>
    </motion.header>
  );
};

export default Header;
