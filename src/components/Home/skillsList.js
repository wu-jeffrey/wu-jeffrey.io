import React, { Component } from 'react';
import 'firebase/firestore';
import { Skeleton } from 'antd'

class SkillsList extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    let data = [];
    this.props.firebase.queryDatabase("languages").then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc);
      });
      
      let str = data.sort((a, b) => b.data().months_used - a.data().months_used)
                    .map((doc) => doc.id)
                    .join(', ');


      this.setState({ skills: str, loading: false })
    })
  }

  render() {
    return (
      <div>
        <Skeleton 
          active
          loading={this.state.loading}
          paragraph={false}
        >
          <p><strong>Skills:</strong> {this.state.skills}</p>
        </Skeleton>
      </div>
    );
  }
}

export default SkillsList;