import './App.css';
// App.js
import React, { Component } from "react";
import General from "./components/general";
import Education from './components/education';
import Practical from './components/practical';
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

  render(){
    return (
      <div className="App">
        <div className="form">
          <div class="content">
            <header className="App-header">
              <p>CV-Editor</p>
            </header>
            <h2>General</h2>
            <General/>
            <h2>Education</h2>
            <Education/>
            <h2>Practical Experience</h2>
            <Practical/>
                    </div>
          </div>
      </div>
    );
  }
}

export default App;
