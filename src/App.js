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
      education: [],
      practical: [],
    }
  }

  addEducation = ()=>{
    // console.log("Itsa me")
    let cpy = [...this.state.education];
    cpy.push(<Education />);
    this.setState({
      education: cpy,
    });
  }
  removeEducation = ()=>{
    // console.log("Itsa me")
    let cpy = [...this.state.education];
    cpy.splice(-1)
    this.setState({
      education: cpy,
    });
  }

  addPractical = ()=>{
    // console.log("Itsa me")
    let cpy = [...this.state.practical];
    cpy.push(<Practical />);
    this.setState({
      practical: cpy,
    });
  }
  removePractical = ()=>{
    // console.log("Itsa me")
    let cpy = [...this.state.practical];
    cpy.splice(-1)
    this.setState({
      practical: cpy,
    });
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
            <div className='multiple'>{this.state.education}</div>
            {/* <Education/> */}
            <span className="buttons">
              <button onClick={this.addEducation}>Add education</button>
              <button onClick={this.removeEducation}>Remove education</button>
            </span>
            <h2>Practical Experience</h2>
            <div className='multiple'>{this.state.practical}</div>
            <span className="buttons">
              <button onClick={this.addPractical}>Add Experience</button>
              <button onClick={this.removePractical}>Remove Experience</button>
            </span>
                    </div>
          </div>
      </div>
    );
  }
}

export default App;
