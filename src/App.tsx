import React from 'react';

import Ladder from './components/Ladder';
import './App.css';

const totalSteps = 5; // update this number for number of steps
function App() {
  return (
    <div className="App">
      <h2>Expanding Ladder</h2>
      <Ladder steps={totalSteps} />
    </div>
  );
}

export default App;
