import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { CV } from "./components/CV";
import { Navbar } from "./components/Navbar";
import { Photography } from "./components/Photography";
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
        <Route exact path="/photography">
            <Photography />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cv">
          <CV />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
