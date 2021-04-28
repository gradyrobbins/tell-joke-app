import React from 'react';
import './App.css';
import Header from './Header';
import { Joke } from './Joke';

export default function App() {
  return (
    <div className="App">
      <Header title="Tell Brenda A Joke" />
      <Joke />
    </div>
  );
}
