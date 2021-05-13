import React, { useState } from 'react';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { CalendarPage } from './components/CalendarPage';
import { AnnouncementPage } from './components/AnnouncementPage';
import { CoursesPage } from './components/CoursesPage';
import { MessagesPage } from './components/MessagesPage';
import { ForumPage } from './components/ForumPage';

import './App.scss';

export const App = () => {
  const [isNavVisible, setNavVisibility] = useState(true);

  return (
    <div className="app">
      {isNavVisible && <Nav />}
      {/* <div className="app__content"> */}
      <div
        className={classNames(
          'app__content', { 'app__big-content': !isNavVisible },
        )}
      >
        <Header
          setNavVisibility={setNavVisibility}
          isHeaderBig={!isNavVisible}
        />
        <Switch>
          <Route path="/dashboard" component={Main} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/announcement" component={AnnouncementPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/messages" component={MessagesPage} />
          <Route path="/forum" component={ForumPage} />
          <p>Page not found</p>
        </Switch>
      </div>
    </div>
  );
};
