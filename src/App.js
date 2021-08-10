import './scss/app.scss';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './components/Home';
import AddEntry from './components/AddEntry';
import Statistics from './components/Statistics';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/add">
              <AddEntry />
          </Route>
          <Route path="/statistics">
              <Statistics />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
