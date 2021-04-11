import React from 'react';
import PropTypes from 'prop-types';

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
        style={{ backgroundColor: color }}
      >
        {upBox}
      </div>
      <div
        className="history-small__box"
        style={{ backgroundColor: color }}
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

HistorySmall.propTypes = {
  upBox: PropTypes.number.isRequired,
  downBox: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
