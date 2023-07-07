// Overview.js

import React, { Component } from "react";

class practical extends Component {
  constructor() {
    super();
    this.state = {
      practical: {
        name: "",
        position: "",
        tasks: "",
        dateStart: "",
        dateEnd: "",
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
                  <label htmlFor="Name">Employer Name: </label>
                  {this.state.edit ? (
                    <span>
                      <input
                        onChange={(e) => {
                          this.setState({
                            practical: {
                              name: e.target.value,
                              position: this.state.practical.position,
                              tasks: this.state.practical.tasks,
                              dateStart: this.state.dateStart,
                            },
                          });
                        }}
                        value={this.state.practical.name}
                        type="text"
                        id="Name"
                      />
                    </span>
                  ) : (
                    <p>{this.state.practical.name}</p>
                  )}
              </div>
              <div className="box">
                  <label htmlFor="position">Position: </label>
                  {this.state.edit ? (
                    <span>
                      <input
                        onChange={(e) => {
                          this.setState({
                            practical: {
                              name: this.state.practical.name,
                              position: e.target.value,
                              tasks: this.state.practical.tasks,
                              dateStart: this.state.dateStart,
                            },
                          });
                        }}
                        value={this.state.practical.position}
                        type="text"
                        id="position"
                      />
                    </span>
                  ) : (
                    <p>{this.state.practical.position}</p>
                  )}
              </div>
          </div>
          <label htmlFor="tasks">Tasks: </label>
          {this.state.edit ? (
            <span>
              <textarea
                onChange={(e) => {
                  this.setState({
                    practical: {
                      name: this.state.practical.name,
                      position: this.state.practical.position,
                      tasks: e.target.value,
                      dateStart: this.state.practical.dateStart,
                    },
                  });
                }}
                value={this.state.practical.tasks}
                id="tasks"
              />
            </span>
          ) : (
            <p>{this.state.practical.tasks}</p>
          )}

          <div className="row">
              <div className="box">
                  <label htmlFor="dateStart">Date Start: </label>
                  {this.state.edit ? (
                    <span>
                      <input
                        onChange={(e) => {
                          this.setState({
                            practical: {
                              name: this.state.practical.name,
                              position: this.state.practical.position,
                              tasks: this.state.practical.tasks,
                              dateStart: e.target.value,
                            },
                          });
                        }}
                        value={this.state.practical.dateStart}
                        type="text"
                        id="dateStart"
                      />
                    </span>
                  ) : (
                    <p>{this.state.practical.dateStart}</p>
                  )}
              </div>
              <div className="box">
                  <label htmlFor="dEnd">Date End: </label>
                  {this.state.edit ? (
                    <span>
                      <input
                        onChange={(e) => {
                          this.setState({
                            practical: {
                              name: this.state.practical.name,
                              position: this.state.practical.position,
                              tasks: this.state.practical.tasks,
                              dateStart: this.state.practical.dateStart,
                              dateEnd: e.target.value,
                            },
                          });
                        }}
                        value={this.state.practical.dateEnd}
                        type="text"
                        id="dEnd"
                      />
                    </span>
                  ) : (
                    <p>{this.state.practical.dateEnd}</p>
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

export default practical;
