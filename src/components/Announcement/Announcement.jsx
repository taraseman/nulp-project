import React from 'react';
import classNames from 'classnames';
import { announcement } from '../../info-from-server';
import eye from '../../images/view.png';
import './Announcement.scss';

export const Announcement = () => (
  <div className="announcement">
    <div className="announcement__head head">
      <div className="head__left-box">
        <h2 className="head__title"> Announcement</h2>
        <p className="head__text">
          From your Principal or Teachers
        </p>
      </div>
      <div className="head__right-box">
        <a href="/" className="head__link head__link--left">Principal</a>
        <a href="/" className="head__link head__link--right">Teacher</a>
      </div>
    </div>
    <ul className="announcement__body">
      {announcement.map(item => (
        <li
          key={item.id}
          className={classNames('announcement__item item',
            { 'item--yellow': item.position === 'teacher' },
            { 'item--blue': item.position === 'principal' })}
        >
          <div className="item__viewed">
            <p>{item.viewed}</p>
            <img
              src={eye}
              alt="eye"
              className="item__img"
            />
          </div>
          <div className="item__content">
            <h3 className="item__title">
              {item.title}
            </h3>
            <p className="item__text">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
