import React from 'react';
import classNames from 'classnames';

import ava1 from '../../images/people/ava1.png';
import ava2 from '../../images/people/ava2.png';
import ava3 from '../../images/people/ava3.png';
import ava4 from '../../images/people/ava4.png';
import { people } from '../../info-from-server';

import './PeopleList.scss';

const peopleImages = [ava1, ava2, ava3, ava4];

export const PeopleList = () => (
  <ul className="people-list">
    {people.map(person => (
      <li
        className={classNames(
          'people-list__item', { 'people-list__item--unread': !person.opened },
        )}
        key={person.id}
      >
        <div className="people-list__img">
          <img
            src={peopleImages[person.id]}
            alt="person"
          />
        </div>
        <div className="people-list__content">
          <h2 className="people-list__title">{person.name}</h2>
          <p className="people-list__text">{person.message}</p>
          <p
            className="people-list__when-was-last-time"
          >
            {person.whenWasLastTime}
          </p>
          <div
            className={classNames('people-list__circle',
              { 'people-list__circle--online': person.online },
              { 'people-list__circle--ofline': !person.online })}
          >
            {' '}
          </div>
        </div>
      </li>
    ))}
  </ul>
);
