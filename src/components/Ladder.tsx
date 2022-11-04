import React, { useState } from 'react';

import LadderStep from './LadderStep';

import './Ladder.css';

interface LadderProps {
  steps: number;
}

const Ladder: React.FC<LadderProps> = ({ steps }) => {
  const [hoverState, setHoverState] = useState<boolean[]>(
    Array(steps).fill(false)
  );
  const hoverHandler = (index: number) => {
    let newHoverState = hoverState.map((item, idx) => {
      return idx <= index;
    });
    setHoverState(newHoverState);
  };
  return (
    <div className="ladder-container">
      {hoverState.map((flag, idx) => {
        return (
          <LadderStep
            key={idx}
            hoverHandler={hoverHandler}
            expand={flag}
            step={idx}
          />
        );
      })}
    </div>
  );
};

export default Ladder;
