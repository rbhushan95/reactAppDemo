import { axios } from "axios";

export function fetchSomeData() {
  const request = axios
    .get("https://my-json-server.typicode.com/typicode/demo/posts")
    .then(res => console.log(res.data))
    .catch(error => {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    });

  // return dispatch => {
  //   request.then(({ data }) => {
  //     dispatch({ type: "FETCH_PROFILE", payload: data });
  //   });
  // };
}

export function fetchEmployees() {
  axios
    .get("http://localhost:2000/retreiveEmployeelist")
    .then(response => {
      this.setState({
        result: response.data,
        errorMessage: ""
      });
    })
    .catch(error => {
      if (error.response) {
        this.setState({
          errorMessage: error.response.data.message,
          result: ""
        });
      } else {
        this.setState({ errorMessage: error.message, result: "" });
      }
    });
}

export function addEmployee() {
  var formJSON = {
    empName: this.state.empName,
    age: this.state.age,
    salary: this.state.salary,
    achievements: this.state.achievements
  };

  axios
    .post("http://localhost:2000/InsertEmployee/", formJSON)
    .then(response => {
      this.setState({ successMessage: response.data.message, error: "" });
      console.log(response.data);
    })
    .catch(error => {
      if (error.response) {
        this.setState({ error: error.response.data.message, success: "" });
      } else {
        this.setState({ error: error.message, success: "" });
      }
    });
}
