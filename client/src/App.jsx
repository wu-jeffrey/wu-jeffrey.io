import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import { Navbar } from './ui/Navbar';
import HomePage from './pages/Homepage';
import './App.css';

function AnimatedSwitch() {
  const location = useLocation();
  return (
    <div className="Content">
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
      </Switch>
      <Navbar />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimatedSwitch />
    </Router>
  );
}

export default App;
