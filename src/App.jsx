import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './assets/data/data.json';
import './App.css'

const App = () => {
  const [cards, setCards] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setCards(data.cards);
  }, []);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header darkMode={darkMode} toggleMode={toggleMode} />
      <Hero darkMode={darkMode} />
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={index} question={card.question} answer={card.answer} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default App;
