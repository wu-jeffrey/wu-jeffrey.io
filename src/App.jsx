import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Firebase, FirebaseContext } from './components/Firebase'
import 'antd/dist/antd.css';
import './App.css'

import { Home } from './components/Home'

export default function App() {
  return (
    <div className='App'>
      <FirebaseContext.Provider value={new Firebase()}>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </FirebaseContext.Provider>
    </div>
  );
}
