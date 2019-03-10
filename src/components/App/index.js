import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
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

const footerStyle = {
  bottom: 0,
  width: "100%",
  height: 300,
  background: "#2f54eb",
  textAlign: "center",
  color: "white"
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
      <Footer style={footerStyle}>Jeffrey Wu © 2019</Footer>
    </div>
  </Router>
);

export default App;