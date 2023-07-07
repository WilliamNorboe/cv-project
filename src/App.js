import './App.css';
// App.js
import React, { Component } from "react";
// import Overview from "./components/Overview";
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
        
        <div>
          <form  onSubmit={this.onSubmitTask}>
              <div className = "general">
                <label htmlFor="Name">Full Name</label>
                <input
                  onChange={(e)=>{
                    this.setState({
                      general: {
                        name: e.target.value,
                        email: this.state.general.email,
                        phoneNumber: this.state.general.phoneNumber,
                      },
                    });
                  }}
                  value={this.state.general.name}
                  type="text"
                  id="Name"
                />
                <label htmlFor="Email">Email</label>
                <input
                  onChange={(e)=>{
                    this.setState({
                      general: {
                        name: this.state.general.name,
                        email: e.target.value,
                        phoneNumber: this.state.general.phoneNumber,
                      },
                    });
                  }}
                  value={this.state.general.email}
                  type="email"
                  id="Email"
                />
                <label htmlFor="pnumber">Phone Number</label>
                <input
                  onChange={(e)=>{
                    this.setState({
                      general: {
                        name: this.state.general.name,
                        email: this.state.general.email,
                        phoneNumber: e.target.value,
                      },
                    });
                  }}
                  value={this.state.general.phoneNumber}
                  type="text"
                  id="pnumber"
                />
              </div>
              <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
