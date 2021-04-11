import React from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Announcement } from '../Announcement';
import { Page } from '../Page';
import { Histories } from '../Histories';
import './Main.scss';

export const Main = () => (
  <div className="main">
    <div className="main__up">
      <Announcement />
      <Calendar />
      <button
        className="main__calendar-button circle-button"
        type="button"
      >
        +
      </button>
    </div>
    <div className="main__down">
      <Page
        title="Messages"
        text="Current Convesations"
        listOf="people"
      />
      <Page
        title="Courses"
        text="Your Current Courses And Process"
        listOf="courses"
      />
      <Histories />
    </div>
  </div>
);
