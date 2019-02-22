import React, { Component } from 'react';
import 'firebase/firestore';
import { 
  Skeleton, Avatar, Icon
} from 'antd'

class JobList extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    let data = [];
    this.props.firebase.queryDatabase("jobs").then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc);
      });
      this.setState({ jobs: str, loading: false })
    })
  }

  arrayToElems(array) {
    return array.map((doc) => {
      <Card
      style={cardStyle}
      >
        <Skeleton
          loading={this.state.loading} 
          avatar title paragraph
          active
        >
          <Card.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {/* <Switch checked={!loading} onChange={this.onChange} /> */}

      </div>
    );
  }
}

export default JobList;