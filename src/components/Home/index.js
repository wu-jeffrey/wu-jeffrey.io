import React from 'react';

import { FirebaseContext } from '../Firebase';
import SkillsList from './skillsList';

import {
  Card
} from 'antd';

const cardStyle = {
  margin: 5,
  borderRadius: 15,
  maxWidth: 700
}

const Home = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return (
        <section style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Card 
            style={ cardStyle }
            cover={<div style={{borderTopRightRadius: 15, borderTopLeftRadius: 15, padding: 20, width: '100%', backgroundColor: '#4885ed'}}>
            <h1 style={{ margin: 0, color: 'white', textAlign: 'center' }}>Hi, I'm Jeff, Welcome to my website!</h1></div>}
          >
            <p>I'm currently a <strong>Mechatronics Engineering student</strong> at the University of Waterloo, with experience in <strong>Web Development</strong>, <strong>Graphics Design</strong> and <strong>Electronics Enclosure Prototyping</strong>.</p>
            <p>Through my studies, I aim to establish a strong technical foundation in order to realize creative solutions for problems that <strong>I'm passionate about</strong>, such as <strong>health/fitness, education, and sustainable technologies</strong>.</p>
            <p>I love learning new things and am always trying something new, so make sure to <strong>check out the projects in my <a href="/portfolio">portfolio</a>!</strong></p>
            <hr/>
            <SkillsList firebase={firebase}></SkillsList>
          </Card>
          
          <br />
          <h1 style={{margin: 0}}>Experience</h1> 
          <br />


        </section>
      );
    }}
  </FirebaseContext.Consumer>
);

export default Home;