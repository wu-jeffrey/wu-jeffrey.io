import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import HomePage from '../Home';
import PortfolioPage from '../Portfolio';
import * as ROUTES from '../../constants/routes';

import AdminPage from '../Admin';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

const pageContainerStyle = {

}

const contentStyle = {

}

const App = () => (
  <Router>
    <div style={pageContainerStyle}>
      <Navigation />
      <Content style={contentStyle}>
        <Route exact path={ROUTES.ROOT} component={HomePage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.PORTFOLIO} component={PortfolioPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Content>
    </div>
  </Router>
);

export default App;