import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import { Menu } from 'antd';
import "antd/dist/antd.css";

const menuStyle = {
  // lineHeight: '64px',
  display: 'flex',
  justifyContent: 'center',
  padding: '10px'
};

const menuItemStyle = {
  margin: '10px'
};

const Navigation = () => (
  <div>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
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

export default Navigation;