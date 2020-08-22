import React from 'react';
import './App.css';
import Header from './components/Header'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Header name="Asifur" mark="!"/> 
      <Counter/>
    </div>
  );
}

export default App;
