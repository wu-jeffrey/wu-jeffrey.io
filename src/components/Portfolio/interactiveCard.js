import React from 'react';
import {
  Card,
  Icon,
} from 'antd';
import "./interactiveCard.scss"

class InteractiveCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  toggleCard = (e) => {
    console.log(e.target.tagName);
    
    const target = e.target.tagName;

    if(target === "DIV" || target === "IMG") {
      let current = this.state.clicked;
      this.setState({clicked: !current})
    }
  }

  render(){
    const hasVideo = this.props.videoPath;

    const videoElem = hasVideo ? (            
      <video
        width="195"
        height="300"
        controls
      >
        <source src="/videos/gimbal.mp4" type="video/mp4"/>
      </video>
    ) : null;

    const hasLink = this.props.link;

    const linkElem = hasLink ? (
      <a href={this.props.link}><Icon type="link"></Icon></a>
    ) : null;

    return (
      <div onClick={this.toggleCard}>
        <Card
          className={this.state.clicked ? "card clicked" : "card"}
          cover={this.props.cover}
          actions={[linkElem]}
        >
          <Card.Meta
            title={this.props.title}
            description={this.props.description}
          />
          <div className="expanded-description">
            {videoElem}
            <p>{this.props.extendedDescription}</p>
          </div>
        </Card>
      </div>
    );
  };
}

export default InteractiveCard;