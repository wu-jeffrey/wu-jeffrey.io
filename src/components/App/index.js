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

const contentStyle = {
  padding: '0 50px',
  marginTop: 64,
  maxWidth: 1200,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const App = () => (
  <Router>
    <Layout>
      <Navigation />
      <Content style={contentStyle}>
        <Route exact path={ROUTES.ROOT} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.PORTFOLIO} component={PortfolioPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Jeffrey Wu ©2019
      </Footer>
    </Layout>
  </Router>
);

export default App;