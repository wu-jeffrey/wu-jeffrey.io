import React from 'react';
import { FirebaseContext } from '../Firebase';
import InteractiveCard from './interactiveCard.js';
import "./portfolio.scss"

const projects = [
  {name: "3-axis Camera Gimbal", description: "1A Mechatronics Design Project", extendedDescription: "A camera gimbal made using Lego EV3 for my 1A final Project at uWaterloo. Using gyro sensors, DC motors and a custom PID algorithm, the Gimbal is able to fix a smartphone camera in 3D space.", imagePath: "gimbal.jpg", videoPath: "gimbal.mp4", },
  {name: "Nutrition Tracker", description:"Track macronutrient and caloric intake", extendedDescription: "Simple macronutrient and calorie tracker that eliminates unecessary and choppy user flows found in popular nutrition trackers. Built using Rails, PostgresSQL, Heroku", imagePath: "nutrition.jpg", link:"https://serene-retreat-25036.herokuapp.com/users/sign_in" },
  {name: "Sleight of Hand", description:"A tool to help gamers increase reaction time", extendedDescription: "Multiplayer PC games are unforgiving to new players. Improve mouse precision, reaction and tracking using this tool so you can stop getting pubstomped. Built with Polymer, D3 and Firebase.", imagePath: "sleight.jpg", link:"https://sleight-117.firebaseapp.com/" },
  {name: "Project Ares", description:"Custom mini-ITX PC Case", extendedDescription: "Moving every 4 months for coop with a full ATX tower is inconvenient. Meet Ares, a small form factor case that doesn't sacrifice on performance, cooling or aesthetics... just my monthly grocery budget.", imagePath: "case.jpg", },
]

class Portfolio extends React.Component {

  arrayToElems(array) {
    return array.map((project, i) => {
      return (
        <InteractiveCard
          className="card"
          cover={<img alt="" style={{maxHeight: 300}} src={`/images/project-images/${project.imagePath}`} />}
          title={project.name}
          description={project.description}
          extendedDescription={project.extendedDescription}
          videoPath={project.videoPath}
          link={project.link}
          key={i}
        >
        </InteractiveCard>
      )
    });
  }

  render(){
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          return (
            <div className="page-container">
              <div className="hero">
                <h1>Projects</h1>
                <p>
                  I love learning new things and building unique projects. I've worked alot with Web technologies - particularly frontend and design. 
                  <br/>
                  I'm currently learning about AI, and Machine Vision using OpenCV and Tesseract.js so I can automate my daily tasks. 
                </p>
              </div>
              <div className="cards-container">
                {this.arrayToElems(projects)}
              </div>
              <h1 style={{marginBottom: 50, textAlign: "center"}}>More coming soon!</h1>
            </div>
          );
        }}
      </FirebaseContext.Consumer>
    );
  };
}

export default Portfolio;