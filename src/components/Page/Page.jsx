import React from 'react';
import PropTypes from 'prop-types';

import { PeopleList } from '../PeopleList';
import { Courses } from '../Courses';
import './Page.scss';

export const Page = ({ title, text, listOf }) => (
  <div className="page">
    <div className="page__head">
      <h2 className="page__title">
        {title}
      </h2>
      <p className="page__text">
        {text}
      </p>
      <button
        className="circle-button page__button"
        type="button"
      >
        +
      </button>
    </div>
    {(listOf === 'people')
      ? (
        <PeopleList />
      ) : (
        <Courses />
      )
    }
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  listOf: PropTypes.string.isRequired,
};
