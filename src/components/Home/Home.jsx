import React from 'react';
import { Layout, Button, Space } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined
} from '@ant-design/icons';

import './Home.css'

export function Home() {
  return (
    <div className='Home'>
      <div className='header bold'>
        JW.
      </div>
      <div className='hero'>
        <div className="left">
          <h1 className='bold'>Jeffrey Wu</h1>
          <h4>Fullstack Developer</h4>
          <h4>Engineering Student</h4>
          <h4>DIY Addict</h4>
          <Space>
            <Button
              href="https://www.linkedin.com/in/jeff--wu/"
              type="primary"
              shape="circle"
              icon={<LinkedinOutlined />} />
            <Button
              href="https://github.com/wu-jeffrey"
              shape="circle"
              icon={<GithubOutlined />} />
          </Space>
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  );
}
