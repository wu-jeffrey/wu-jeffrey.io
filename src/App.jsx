import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Firebase, FirebaseContext } from './components/Firebase';
import { Layout, Button } from 'antd'
import 'antd/dist/antd.css';
import './App.css'

import { Home } from './components/Home'
import { Article } from './components/Article/Article.jsx'
import { RickRoll } from './components/RickRoll/RickRoll.jsx'

export default function App() {
  return (
    <div className='App'>
      <FirebaseContext.Provider value={new Firebase()}>
        <div className='header bold'>
          <a href="/">JW.</a>
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/articles/:id" component={Article} />
            <Route path="/linktree" component={RickRoll} />
          </Switch>
        </Router >
      </FirebaseContext.Provider >
      <Layout.Footer>Jeffrey Wu © {(new Date()).getFullYear()}</Layout.Footer>
    </div >
  );
}
