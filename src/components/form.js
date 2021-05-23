/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Results from './results';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockTerm: '',
      age: '',
      showRes: false,
    };
  }

  //   componentDidMount() {

  //   }

  onAgeChange = (event) => {
    this.setState({ age: event.target.value });
  }

  onStockChange = (event) => {
    this.setState({ stockTerm: event.target.value });
  }

  onSubmit = () => {
    this.setState({ showRes: true });
  }


  render() {
    return (
      <div id="form">
        {/* <div id="fields"> */}
        Your Age: <input onChange={this.onAgeChange} value={this.state.age} />
        Stock Symbol: <input onChange={this.onStockChange} placeholder="(e.x. AAPL for Apple)" value={this.state.stockTerm} />
        {/* </div> */}
        <div role="button" id="submit-button" tabIndex={0} onClick={this.onSubmit}>
          Submit
        </div>
        {this.state.showRes ? (
          <Results
            stock={this.state.stockTerm}
            age={this.state.age}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Form;
