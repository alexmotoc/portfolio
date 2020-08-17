import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Photography } from "./components/Photography";
import { Collections, Collection } from './components/Collection';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {Collections.map(item => (
          <Route exact key={item.title} path={`/photography/${item.title.toLowerCase().split(' ').join('-')}`}>
            <Collection {...item}/>
          </Route>
        ))}
        <Route exact path="/photography">
            <Photography />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
