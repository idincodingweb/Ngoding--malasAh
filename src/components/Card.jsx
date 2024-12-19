import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ question, answer, darkMode }) => {
  return (
    <motion.div 
      className={`card ${darkMode ? 'dark' : 'light'}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <p><strong>{question}</strong></p>
      <p>{answer}</p>
    </motion.div>
  );
};

export default Card;
