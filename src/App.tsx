import React from 'react';

import Ladder from './components/Ladder';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Expanding Ladder</h2>
      <Ladder steps={2} />
    </div>
  );
}

export default App;
