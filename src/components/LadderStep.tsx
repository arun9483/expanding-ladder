import React, { useCallback } from 'react';

import LadderStepLogo from './../assets/ladder.png';
import './LadderStep.css';

interface LadderStepProps {
  expand: boolean;
  step: number;
  hoverHandler: (step: number) => void;
}

const LadderStep: React.FC<LadderStepProps> = ({
  expand,
  step,
  hoverHandler,
}) => {
  const mouseEnterHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      hoverHandler(step);
    },
    [step]
  );

  const mouseLeaveHandler = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      hoverHandler(-1);
    },
    [step]
  );

  return (
    <img
      className={expand ? 'big-image' : 'normal-image'}
      src={LadderStepLogo}
      title="ladder-step"
      data-step={step}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    />
  );
};

export default LadderStep;
