import React, { Component, Fragment } from "react";
import Child from "./child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { parentAge: 40, childAge: 10 };
  }
  parentAgeCalculator = currentChildAge => {
    var { parentAge, childAge } = { ...this.state };
    const diff = parseInt(parentAge - childAge);

    const childCurrentAge = parseInt(currentChildAge.childAge);

    const newParentAge = parseInt(childCurrentAge) + parseInt(diff);
    const newChildAge = parseInt(childCurrentAge);

    this.setState({ parentAge: newParentAge, childAge: newChildAge });
  };

  render() {
    return (
      <Fragment>
        <button
          onClick={() => {
            this.setState({ parentAge: 50, childAge: 20 });
          }}
        >
          Parent click
        </button>
        <div>curent parnet age :-{this.state.parentAge}</div>
        <div>curent Child age :- {this.state.childAge} </div>
        <Child
          childAge={this.state.childAge}
          onchildAgeChange={childCurrentAge =>
            this.parentAgeCalculator.bind(this, childCurrentAge)
          }
        />
      </Fragment>
    );
  }
}

export default Parent;
