import React from 'react';
import { Button, Space, Layout } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion'

import './Home.css'
import { GeometricArt } from '../ui/GeometricArt'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'

export function Home() {
  return (
    <div className='Home'>
      <div className='hero'>
        <AnimatePresence>
          <motion.div className="left"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <h1 className='bold'>Jeffrey Wu</h1>
            <h4>Developer</h4>
            <h4>Student</h4>
            <h4>DIYer</h4>
            <Space>
              <Button
                href="https://www.linkedin.com/in/jeff--wu/"
                target="_blank"
                type="primary"
                shape="round"
                icon={<LinkedinOutlined />}>Linkedin</Button>
              <Button
                href="https://github.com/wu-jeffrey"
                target="_blank"
                shape="round"
                icon={<GithubOutlined />}>Github</Button>
            </Space>
          </motion.div>
        </AnimatePresence>
        <div className="right">
          <GeometricArt />
        </div>
      </div>
      <Experience />
      <Projects />
    </div>
  );
}
