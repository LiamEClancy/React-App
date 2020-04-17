import React, { Component } from "react";


// Stateless Functional Component
class NavBar extends Component {
    render () {
      const {
        onChange,
        onSave
      } = this.props;
      return (
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-brand">
            CODEX
            <input type="text" id="projectTitle" name="projectTitle" placeholder="Please enter a project name."
            onChange={(event) => this.props.onChange(event.target.value)}/>

            <button className="btn btn-info m-2" onClick={() => this.props.onSave()}>
              <i className="fa fa-download" aria-hidden="true" />
            </button>

          </div>
        </nav>
      );
    };
  };

export default NavBar;
