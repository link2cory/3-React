import React, { Component } from 'react';

class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.campsite ?
      <div className="row" />
      : <div />;
  }
}

export default CampsiteInfo;
