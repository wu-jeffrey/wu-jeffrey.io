import React from 'react';
import { Button, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion'

import './Home.css'
import { GeometricArt } from '../ui/GeometricArt'

export function Home() {
  return (
    <div className='Home'>
      <div className='header bold'>
        JW.
      </div>

      <div className='hero'>
        <AnimatePresence>
          <motion.div className="left"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
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
          </motion.div>
        </AnimatePresence>
        <div className="right">
          <GeometricArt />
        </div>
      </div>
    </div>
  );
}
