import React, { useState } from 'react';
import { Card, Avatar, Space, Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion'

import './Experience.css'
import { UnyteIcon, MitreIcon, MyTimeIcon, ShopifyIcon, ShopifyPlusIcon } from '../../ui/icons'


export function Experience() {
  const jobsFullList = [
    {
      company: 'Shopify',
      position: 'Backend Developer',
      location: 'Ottawa, ON',
      avatar: <Avatar size={64} icon={<ShopifyIcon />} style={{ background: '#f2f2f2' }} />,
      date: 'Sep - Dec 2020'
    },
    {
      company: 'Shopify Plus',
      position: 'Frontend Developer',
      location: 'Waterloo, ON',
      avatar: <Avatar size={64} icon={<ShopifyPlusIcon />} style={{ background: 'black' }} />,
      date: 'Jan - Apr 2020'
    },
    {
      company: 'MyTime',
      position: 'Fullstack Developer',
      location: 'San Francisco, CA',
      avatar: <Avatar size={64} icon={<MyTimeIcon />} style={{ background: '#206071' }} />,
      date: 'May - Aug 2019'
    },
    {
      company: 'Mitre Media',
      position: 'Web Developer',
      location: 'Toronto, ON',
      avatar: <Avatar size={64} icon={<MitreIcon />} style={{ background: '#80b600' }} />,
      date: 'Sep - Dec 2018'
    },
    {
      company: 'Unyte Health',
      position: 'Software Developer',
      location: 'Toronto, ON',
      avatar: <Avatar size={64} icon={<UnyteIcon />} style={{ background: '#008078' }} />,
      date: 'Sep - Dec 2018'
    },
  ]

  const [jobs, setJobs] = useState(jobsFullList.slice(0, 3));
  const toggleJobList = () => {
    if (jobs.length === 5) {
      setJobs(jobsFullList.slice(0, 3))
    } else {
      setJobs(jobsFullList)
    }
  }

  return (
    <div className='Experience' style={{ minHeight: 680 }}>
      <motion.h1 className="bold section-title" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Experience</motion.h1>
      <Space direction="vertical" style={{ width: 400 }}>
        {
          jobs.map((job, i) => (
            <AnimatePresence key={i}>
              <motion.div
                initial={{ y: -50 * i, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i / 10 }}>
                <Card title={job.position} extra={job.date}>
                  <Card.Meta
                    avatar={job.avatar}
                    title={job.company}
                    description={job.location}
                  />
                </Card>
              </motion.div>
            </AnimatePresence>
          ))
        }
      </Space>
      <Space style={{ marginTop: 24 }}>
        {/* <Button type="primary" shape="round">Open Resume</Button> */}
        <Button shape="round" onClick={toggleJobList}>{jobs.length === 3 ? "Show More" : "Hide"}</Button>
      </Space>
    </div>
  );
}
