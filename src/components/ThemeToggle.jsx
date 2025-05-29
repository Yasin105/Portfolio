import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="theme-switch">
      <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
      <span className="slider">
        <span className="icon">{darkMode ? '🌙' : '🌞'}</span>
      </span>
    </label>
  );
};

export default ThemeToggle;
