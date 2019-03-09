import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import { Menu } from 'antd';
import "antd/dist/antd.css";

const containerStyle = {
  display: 'block'
}

const menuStyle = {
  // position: "absolute",
  display: 'flex',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: "transparent"
};

const menuItemStyle = {
  margin: '10px'
};

const component = ({location, route, params}) => (
  <div style={containerStyle}>
    <Menu
      mode="horizontal"
      selectedKeys={[getCurrentPage(location)]}
      style={menuStyle}
    >
      <Menu.Item style={menuItemStyle} key="1">
        <Link to={ROUTES.HOME}>Home</Link>
      </Menu.Item>
      <Menu.Item style={menuItemStyle} key="2">
        <Link to={ROUTES.PORTFOLIO}>Portfolio</Link>
      </Menu.Item>
    </Menu>
    
  </div>
);

const getCurrentPage = (location) => {
  const pageSchema = {
    home: "1",
    portfolio: "2"
  };
  let locationStr = location.pathname.substr(1);
  return pageSchema[locationStr] || "1";
}

const Navigation = withRouter(component);

export default Navigation;