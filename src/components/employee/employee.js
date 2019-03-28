import React, { Component, Fragment, createRef } from "react";
import "../../cssFiles/mainStyle.css";
import styles from "../../cssFiles/stylledCss.css";
import { fetchSomeData } from "../../serverCalls/userAction";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ravi Bhushan Kumar",
      age: 0
    };
    this.ageFactor = createRef();
  }

  ageUpHandler = () => {
    const currentstate = { ...this.state };
    console.log(currentstate.age);
    console.log(this.ageFactor.current.value);
    const ageFactorData =
      parseInt(this.ageFactor.current.value) === 0 ||
      isNaN(parseInt(this.ageFactor.current.value))
        ? this.props.ageFactorFromParent
        : parseInt(this.ageFactor.current.value);

    this.setState({
      age: currentstate.age + ageFactorData
    });
  };

  componentDidMount() {
    // fetchSomeData();
  }

  divStyle = {
    border: "1px solid black"
  };
  render() {
    console.log("employee called");
    return (
      <Fragment>
        <div style={this.divStyle} className="divStyle">
          this is from employee!
        </div>
        <div>
          Employee Info:-
          <br />
          <label>First Name :- </label>
          {this.state.firstName}
          <br />
          <label>Age :- </label>
          {this.state.age}
          <input type="number" ref={this.ageFactor} />
          <br />
          <input type="button" value="Age Up" onClick={this.ageUpHandler} />
          <br />
          <input
            type="button"
            value="Parent logic of Age Up"
            onClick={this.props.mainAgeUpHandler({ age: this.state.age })}
          />
        </div>
        <div className={styles.success}>this is success</div>
        <div className={styles.error}>this is error</div>
      </Fragment>
    );
  }
}

export default Employee;
