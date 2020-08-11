import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Photography } from "./components/Photography";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/photography">
            <Photography />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
