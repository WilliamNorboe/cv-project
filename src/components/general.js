// Overview.js

import React, { Component } from "react";

class general extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        name: "",
        email: "",
        phoneNumber: "",
      },
      edit: true,
    };
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    if (this.state.edit) {
      console.log(this.state);
      this.setState({
        edit: false,
      });
    } else {
      this.setState({
        edit: true,
      });
    }

    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.onSubmitTask}>
        <div className="general">
          <div className="box">
              <label htmlFor="Name">Full Name: </label>
              {this.state.edit ? (
                <span>
                  <input
                    onChange={(e) => {
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
                </span>
              ) : (
                <p>{this.state.general.name}</p>
              )}
          </div>
          <div className="box">
              <label htmlFor="Email">Email: </label>
              {this.state.edit ? (
                <span>
                  <input
                    onChange={(e) => {
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
                </span>
              ) : (
                <p>{this.state.general.email}</p>
              )}
          </div>
          <div className="box">
              <label htmlFor="pnumber">Phone Number: </label>
              {this.state.edit ? (
                <span>
                  <input
                    onChange={(e) => {
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
                </span>
              ) : (
                <p>{this.state.general.phoneNumber}</p>
              )}
          </div>
        </div>
        {this.state.edit ? (
          <button type="submit">Submit</button>
        ) : (
          <button>Edit</button>
        )}
      </form>
    );
  }
}

export default general;
