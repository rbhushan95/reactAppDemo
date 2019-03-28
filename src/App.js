import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Employee from "./components/employee/employee";
import Parent from "./components/mathGame/parent";

class App extends Component {
  ageHandler = data => {
    const currentAge = data.age;
    // console.log("from parent" + JSON.stringify(data.age));
    console.log(currentAge);
    let afterAGeUp = currentAge + 20;
    console.log(afterAGeUp);
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          Main App
          <div>
            child will go here :-
            <Employee
              ageFactorFromParent={10}
              mainAgeUpHandler={age => this.ageHandler.bind(this, age)}
            />
          </div>
        </div>
        <div style={{ height: "100px" }} />
        <div>
          Game Section:-
          <Parent />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
