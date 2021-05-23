import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //   componentDidMount() {

  //   }


  render() {
    return (
      <div id="results">
        <h1>{this.props.stock}</h1>
        results here
      </div>
    );
  }
}

export default Results;
