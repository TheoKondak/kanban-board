import { useState, useEffect } from 'react';
import Column from './components/Column';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Column />
      <Column />
      <Column />
    </div>
  );
};

export default App;
