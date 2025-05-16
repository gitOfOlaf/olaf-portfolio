import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const fruits = ["Apple", "Pear", "Orange"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default App;