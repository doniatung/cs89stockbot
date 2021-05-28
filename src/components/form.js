import React, { Component } from 'react';
import Results from './results';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockTerm: '',
      age: '',
      riskTolerance: '',
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

  onToleranceChange = (event) => {
    this.setState({ riskTolerance: event.target.value });
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
        Risk Tolerance:
        <div id="riskOptions" onChange={this.onToleranceChange}>
          <input type="radio" value="Low" name="riskTolerance" /> Low
          <input type="radio" value="Medium" name="riskTolerance" /> Medium
          <input type="radio" value="High" name="riskTolerance" /> High
        </div>

        {/* </div> */}
        <div role="button" id="submit-button" tabIndex={0} onClick={this.onSubmit}>
          Submit
        </div>
        {this.state.showRes ? (
          <Results
            stock={this.state.stockTerm}
            age={this.state.age}
            riskTolerance={this.state.riskTolerance}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Form;
