import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import './App.scss';
import { Header } from './components/Header';

export const App = () => {
  const [isNavVisible, setNavVisibility] = useState(true);

  return (
    <div className="app">
      {isNavVisible && <Nav />}
      <div>
        <Header
          setNavVisibility={setNavVisibility}
          isHeaderBig={!isNavVisible}
        />
        <Switch>
          <Route path="/dashboard" component={Main} />
          <p>Page not found</p>
        </Switch>
      </div>
    </div>
  );
};
