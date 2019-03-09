import React from 'react';

import { FirebaseContext } from '../Firebase';
import SkillsList from './skillsList';
import {
  Card,
  Icon,
  Divider,
  Statistic,
  Row,
  Col,
  Button,
} from 'antd';
import * as styles from './styleConst';
class Home extends React.Component {
// TODO: - Replace all <br>
//       - Refactor Style const
//       - Abstract circular bubble div icon things
//       - Unhardcode errything and put into firebase
//       - Use less hacky scroll anim, use raq or ant's motion
//       - Better thing for z index and slant div
//       - Do something less gross with those buttons ^ espc z-ind wrt to pt abv
//       - Do something with the footer
//       - Icons
//       - redesign volunteer section, inset shadow is weird

  maxTilt = 4; // Degrees of slanted banner thing
  constructor(props) {
    super(props);
    this.state = {
      rotateStyle: {
        position: "absolute",
        height: 250,
        width: "150%",
        backgroundColor: "#ea4335",
        bottom: -65,
        zIndex: 0,
        transform: `rotate(-${this.maxTilt}deg) translateX(-5%)`
      }
    };
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (e) => {
    const slope = this.maxTilt/300;
    let scroll = window.scrollY;
    let angle = (scroll > 300) ? 0 : slope * scroll - this.maxTilt;
    // let angle change
    this.setState({
      rotateStyle: {
        position: "absolute",
        height: 250,
        width: "150%",
        backgroundColor: "#ea4335",
        bottom: -65,
        transform: `rotate(${angle}deg)  translateX(-5%)`
      }
    });
    console.log(window.scrollY)
  }

  render() { return (
    <FirebaseContext.Consumer>
      {firebase => {
        return (
          <div style={styles.homeStyle}>

            {/* Hero */}
            <section style={styles.heroStyle}>
              <h1 style={{fontSize: "4em", marginTop: 50}}>
                Hi, I'm Jeff.
              </h1>
              <h3 style={{fontSize: "3em", marginTop: 10}}>
                Welcome to my website!
              </h3>
              <Button href="https://github.com/wu-jeffrey" style={{margin: "0 10px", zIndex: 1}} type="primary" shape="round" icon="github" size="large">Github</Button>
              <Button href="https://www.linkedin.com/in/jeff--wu/" style={{margin: "0 10px", zIndex: 1}} type="default" shape="round" icon="linkedin" size="large">Linkedin</Button>
              
              <div style={this.state.rotateStyle}>
              
              </div>
              <p style={{fontSize: "1.1rem", padding: "0 15px", position: "absolute", left:0, right: 0, bottom: 0, margins: "20px auto", zIndex: 1, color: "white", fontWeight: 500}}>I'm currently a Mechatronics Engineering Student at uWaterloo <br/> with interest in Software Engineering, ML & Machine Vision, Robotics and Biomechanics.</p>

            </section>
            
            {/* Banner with slant under hero */}
            <div style={styles.bodyStyle}>
              <div style={styles.bubbleWrapper}>
                <div style={styles.bubbleStyle}>
                  <Icon type="code" theme="twoTone" />
                </div>
                <h2 style={{color: "white", marginTop: 5, textAlign: "center"}}>Developer</h2>
              </div>
              <div style={styles.bubbleWrapper}>
                <div style={styles.bubbleStyle}>
                  <Icon type="code" theme="twoTone" />
                </div>
                <h2 style={{color: "white", marginTop: 5, textAlign: "center"}}>Designer</h2>
              </div>
              <div style={styles.bubbleWrapper}>
                <div style={styles.bubbleStyle}>
                  <Icon type="code" theme="twoTone" />
                </div>
                <h2 style={{color: "white", marginTop: 5, textAlign: "center"}}>Student</h2>
              </div>
            </div>

            {/* Job Experience */}

            <section style={styles.experienceStyle}>
              <h1 style={{fontSize: "2rem", marginTop: 10}}>
                Experience
              </h1>

              <Card 
                style={styles.cardStyle}
              >
                <div>
                  <div style={styles.logoIconStyleMitre}>
                    <Icon type="code" theme="twoTone" />
                  </div>
                  <h2>Mitre Media</h2>
                  Web Developer
                  <Divider type="vertical"/>
                  Sep 2018 - Dec 2018
                </div>
                <Divider/>
                <ul>
                  <li>Increased marketing email delivery accuracy by 47% using a script to synchronize MySQL and 3rd-party databases.</li>
                  <li>Redesigned a high traffic page, doubling performance target with no impact to SEO.</li>
                  <li>Maintained 7 Ruby on Rails websites with over 500 000 monthly active users.</li>
                </ul>
              </Card>

              <Card 
                style={styles.cardStyle}
              >
                <div>
                  <div style={styles.logoIconStyleUnyte}>
                    <Icon type="code" theme="twoTone" />
                  </div>
                  <h2>Unyte Health</h2>
                  Software Developer
                  <Divider type="vertical"/>
                  Jan 2018 - Apr 2018
                </div>
                <Divider/>
                <ul>
                  <li>Created a web dashboard to aggregate user data from cross-platform games using Polymer, Firebase, and Node.</li>
                  <li>Built a REST API to parse CSV from crowdfunding platforms and automate account creation.</li>
                  <li>Used D3.js to build animated and interactive visualization of user data.</li>
                </ul>
              </Card>
            </section>

            <section style={styles.volunteerStyle}>
              <h1 style={{fontSize: "2em", marginTop: 10, color: "white"}}>
                Volunteer Work
              </h1>
              <p style={{marginTop: 10, color: "white", }}>
                I've had many amazing opportunities to organize and participate in awesome events and unique initiatives. <br/>The two below are just ones that I'm particularly fond of.
              </p>
              <Card style={styles.volunteerCardStyle}>
                <div>
                  <h2>Tools With Impact</h2>
                  Chapter Founder & Coordinator
                  <Divider type="vertical"/>
                  2015 - 2017
                </div>
                <Divider/>
                In my junior and senior of high school, I helped found a chapter of a club called Tools with Impact. <strong>The idea was to collect gently used hand tools in our communities and then ship them to third-world communities.</strong> The idea was my friends', who went on a trip to Mozambique and noticed that the people didn't have access to tools required to build or fix infrastructure. Alongside other several Ottawa high schools, <strong>we raised over $40,000 in donations and $60,000 in tools. Our efforts helped build a school library and a community toolshed in Northern Mozambique.</strong> Afterward, we adapted our approach to include "educational tools", giving the children of these communities some of the things us more fortunate students take for granted.
                <br/><br/>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic
                      title="Value of Tools Collected"
                      value={60000}
                      valueStyle={{ color: '#3f8600' }}
                      prefix="$"
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Donations Raised"
                      value={40000}
                      valueStyle={{ color: '#3f8600' }}
                      prefix="$"
                    />
                  </Col>
                </Row>
              </Card>
              <br/><br/>
              <Card style={styles.volunteerCardStyle}>
                <div>
                  <h2>Ottawa Chinese Community Service Center</h2>
                  English Teacher
                  <Divider type="vertical"/>
                  Summer 2015
                </div>
                <Divider/>
                During my summer break in my sophomore year, I volunteered for the OCCSC. My job was to teach English to seniors who immigrated after their children to Canada. I created lesson plans with themes such as "how to take public transit", "how to go grocery shopping", etc. Each lesson consisted of key vocabulary and common phrases that could be responded to straightforwardly. I later had the idea of evolving the lessons to using technology (i.e. what to do when the wifi stopped working, how to send a WeChat message to their family, etc.). The lessons were very well received and I was particularly passionate about this unique opportunity as my grandparents too, were in the same situation when they came to Canada to help raise me after my parents immigrated. 
              </Card>
            </section>

            <section style={{height: 300, background: "#ea4335"}}></section>
          </div>
        );
      }}
    </FirebaseContext.Consumer>
  )};
}

export default Home;