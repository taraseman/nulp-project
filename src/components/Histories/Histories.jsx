import React from 'react';
import { HistorySmall } from '../HistorySmall';

import './Histories.scss';

export const Histories = () => (
  <div className="histories">
    <HistorySmall
      upBox={11}
      downBox={14}
      title="History of the Earth Assignment"
      code="09h30'"
      color="rgb( 3, 169, 244 )"
    />
    <HistorySmall
      upBox={11}
      downBox={27}
      title="Introduction to Geography Test"
      code="09h30'"
      color="rgb( 255, 193, 7 )"
    />
    <HistorySmall
      upBox={0}
      downBox={0}
      title="Math Formative Assessment Test"
      code="14h30'"
      color="white"
    />
    <HistorySmall
      upBox={11}
      downBox={29}
      title="History of the Earth Final Test"
      code="15h45'"
      color="rgb( 38, 198, 218 )"
    />
  </div>
);
