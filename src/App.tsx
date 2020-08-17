import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Photography } from "./components/Photography";
import { Collections, Collection } from './components/Collection';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Switch>
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
      </main>
    </Router>
  );
}

export default App;
