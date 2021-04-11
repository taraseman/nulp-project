import React from 'react';
import loginedAvatar from '../../images/ava.png';
import locator from '../../images/locator.png';

import './LoginedUser.scss';

export const LoginedUser = () => (
  <div className="logined-user">
    <img
      src={loginedAvatar}
      alt="logined-user-avatar"
      className="logined-user__img"
    />
    <h2 className="logined-user__title">Alex Shaw</h2>
    <div className="logined-user__location">
      <img
        src={locator}
        alt="locator"
        className="logined-user__locator"
      />
      <p>Ho Chi Minh City, Vietnam</p>
    </div>
    <button
      className="logined-user__button"
      type="button"
    >
      Student
    </button>
  </div>
);
