import React from 'react';
import classNames from 'classnames';

import { courses } from '../../info-from-server';
import './Courses.scss';

export const Courses = () => (
  <ul className="courses-list">
    {courses.map(course => (
      <li
        key={course.id}
        className="courses-list__item"
      >
        <div className="courses-list__rating">
          <p className="courses-list__rating-per">
            {`${course.complite}%`}
          </p>
          <div
            className={classNames('courses-list__diagram',
              { 'courses-list__diagram--yellow': course.complite === 100 },
              { 'courses-list__diagram--blue':
                (course.complite < 100) && (course.complite > 20) },
              { 'courses-list__diagram--red': course.complite <= 20 })}
            style={{
              height: `calc(27px * ${course.complite / 100})`,
            }}
          >
            {' '}
          </div>
        </div>
        <div className="courses-list__content">
          <h3 className="courses-list__title">{course.title}</h3>
          <p className="courses-list__text">{course.text}</p>
        </div>
      </li>
    ))}
  </ul>
);
