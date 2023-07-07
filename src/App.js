import './App.css';
// App.js
import React, { Component } from "react";
import General from "./components/general";
// import Overview from "./components/general";
// import uniqid from "uniqid";


class App extends Component {
  constructor(){
    super();
    this.state ={
      general: {
        name: "",
        email: "",
        phoneNumber: ""
      },
      education: {
        name: "",
        study: "",
        date: ""
      },
      practical: {
        name: "",
        position: "",
        tasks: "",
        start: "",
        end: ""
      },
      edit: true
    }
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      edit: false
    });
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      general: {
        name: "",
        email: "",
        phoneNumber: ""
      },
      education: {
        name: "",
        study: "",
        date: ""
      },
      practical: {
        name: "",
        position: "",
        tasks: "",
        start: "",
        end: ""
      }
    });
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>CV-Editor</p>
        </header>
        <General/>
      </div>
    );
  }
}

export default App;
