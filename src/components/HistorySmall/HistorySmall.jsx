import React from 'react';

import './HistorySmall.scss';

export const HistorySmall = (
  { upBox,
    downBox,
    title,
    code,
    color },
) => (
  <div
    className="history-small"
  >
    <div className="history-small__boxes">
      <div
        className="history-small__box"
        style={{ 'background-color': color }}
      >
        {upBox}
      </div>
      <div
        className="history-small__box"
        style={{ 'background-color': color }}
      >
        {downBox}
      </div>
    </div>
    <div className="history-small__content">
      <h3 className="history-small__title">{title}</h3>
      <p className="history-small__code">{code}</p>
    </div>
  </div>
);
