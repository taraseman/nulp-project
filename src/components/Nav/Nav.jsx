import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LoginedUser } from '../LoginedUser';

import dashboardLogo from '../../images/mainNav/Dashboard.png';
import calendarLogo from '../../images/mainNav/Announcement.png';
import announcementLogo from '../../images/mainNav/Calendar.png';
import coursesLogo from '../../images/mainNav/Courses.png';
import messagesLogo from '../../images/mainNav/Messages.png';
import forumLogo from '../../images/mainNav/Forum.png';

import settingsLogo from '../../images/mainNav/Settings.png';
import logOutLogo from '../../images/mainNav/LogOut.png';

import './Nav.scss';

export const Nav = () => (
  <nav className="nav">
    <LoginedUser />
    <ul>
      <li>
        <NavLink
          exact
          className="nav__link"
          activeClassName="nav__link--is-active"
          to="/dashboard"
        >
          <img
            src={dashboardLogo}
            alt="dashboard"
            className="nav__link-img"
          />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          className="nav__link"
          activeClassName="nav__link--is-active"
          to="/calendar"
        >
          <img
            src={calendarLogo}
            alt="calendar"
            className="nav__link-img"
          />
          Calendar
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          className="nav__link"
          activeClassName="nav__link--is-active"
          to="/announcement"
        >
          <img
            src={announcementLogo}
            alt="announcement"
            className="nav__link-img"
          />
          Announcement
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          className="nav__link"
          activeClassName="nav__link--is-active"
          to="/courses"
        >
          <img
            src={coursesLogo}
            alt="courses"
            className="nav__link-img"
          />
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          className="nav__link"
          activeClassName="nav__link--is-active"
          to="/messages"
        >
          <img
            src={messagesLogo}
            alt="messages"
            className="nav__link-img"
          />
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          className="nav__link"
          activeClassName="nav__link--is-active"
          to="/forum"
        >
          <img
            src={forumLogo}
            alt="forum"
            className="nav__link-img"
          />
          Forum
        </NavLink>
      </li>
      <div className="nav__button-box">
        <Link href="/dashboard">
          <img src={settingsLogo} alt="c" />
        </Link>
        <Link href="/dashboard">
          <img src={logOutLogo} alt="c" />
        </Link>
      </div>
    </ul>
  </nav>
);
