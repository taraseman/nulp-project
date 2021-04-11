import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import logo from '../../images/header/Logo.png';
import burger from '../../images/header/Menu.png';

import './Header.scss';

export const Header = ({ setNavVisibility, isHeaderBig }) => (
  <header
    className={classNames('header',
      { 'header--big': isHeaderBig })}
  >
    <div>
      <button
        type="button"
        className="header__button"
        onClick={() => setNavVisibility(cur => !cur)}
      >
        <img src={burger} alt="burger" />
      </button>
    </div>
    <p className="header__window">Dashboard</p>
    <img
      src={logo}
      alt="logo"
      className="header__logo"
    />
  </header>
);

Header.propTypes = {
  setNavVisibility: PropTypes.func.isRequired,
  isHeaderBig: PropTypes.bool.isRequired,
};
