import React from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import PortfolioPage from '../Portfolio';
import * as ROUTES from '../../constants/routes';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'

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

const history = createHistory()
history.listen(location => {
	ReactGA.pageview(location.pathname)
})

export default class App extends React.Component {
  componentDidMount() {
		ReactGA.pageview(window.location.pathname)
	}

	render() {
    return (
      <Router history={history}>
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
  }
}
