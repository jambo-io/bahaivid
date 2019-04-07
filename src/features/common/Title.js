import React, { Component } from 'react';

export default class Title extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="main-title blue-text text-darken-2"> { this.props.title } </div>
        </div>
      </React.Fragment>
    );
  }
}
