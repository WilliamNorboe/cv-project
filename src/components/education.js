// Overview.js

import React, { Component } from "react";

class education extends Component {
  constructor() {
    super();
    this.state = {
      education: {
        name: "",
        study: "",
        date: "",
        graduated: "",
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
          <div className="row">
              <div className="box">
                  <label htmlFor="Name">School Name: </label>
                  {this.state.edit ? (
                    <span>
                      <input
                        onChange={(e) => {
                          this.setState({
                            education: {
                              name: e.target.value,
                              study: this.state.education.study,
                              date: this.state.education.date,
                              graduated: this.state.graduated,
                            },
                          });
                        }}
                        value={this.state.education.name}
                        type="text"
                        id="Name"
                      />
                    </span>
                  ) : (
                    <p>{this.state.education.name}</p>
                  )}
              </div>
              <div className="box">
                  <label htmlFor="Study">Field of Study: </label>
                  {this.state.edit ? (
                    <span>
                      <input
                        onChange={(e) => {
                          this.setState({
                            education: {
                              name: this.state.education.name,
                              study: e.target.value,
                              date: this.state.education.date,
                              graduated: this.state.graduated,
                            },
                          });
                        }}
                        value={this.state.education.study}
                        type="text"
                        id="Study"
                      />
                    </span>
                  ) : (
                    <p>{this.state.education.study}</p>
                  )}
              </div>
          </div>
          <div className="row">
              <div className="box">
                  <label htmlFor="date">Date Attended: </label>
                  {this.state.edit ? (
                    <span>
                      <input
                        onChange={(e) => {
                          this.setState({
                            education: {
                              name: this.state.education.name,
                              study: this.state.education.study,
                              date: e.target.value,
                              graduated: this.state.education.graduated,
                            },
                          });
                        }}
                        value={this.state.education.date}
                        type="text"
                        id="date"
                      />
                    </span>
                  ) : (
                    <p>{this.state.education.date}</p>
                  )}
              </div>
              <div className="box">
                  <label htmlFor="grad">Date Graduated: </label>
                  {this.state.edit ? (
                    <span>
                      <input
                        onChange={(e) => {
                          this.setState({
                            education: {
                              name: this.state.education.name,
                              study: this.state.education.study,
                              date: this.state.education.date,
                              graduated: e.target.value,
                            },
                          });
                        }}
                        value={this.state.education.graduated}
                        type="text"
                        id="grad"
                      />
                    </span>
                  ) : (
                    <p>{this.state.education.graduated}</p>
                  )}
              </div>
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

export default education;
