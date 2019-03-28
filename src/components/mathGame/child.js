import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Child extends Component {
  constructor(props) {
    super(props);
    let childAge = this.props.childAge;
    this.state = {
      localAge: childAge
    };
  }
  onchangeHandler = event => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ localAge: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div> From Props:-{this.props.childAge}</div>
        <div>curent Child age :-</div>
        add some Age in child :-
        <input
          type="text"
          value={this.state.localAge}
          onChange={this.onchangeHandler}
        />
        <button
          onClick={this.props.onchildAgeChange({
            childAge: this.state.localAge
          })}
        >
          Calculate
        </button>
      </Fragment>
    );
  }
}

export default Child;
