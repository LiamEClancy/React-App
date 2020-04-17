import React, { Component } from "react";

class Requirement extends Component {
  render() {
    const {
      onDelete,
      onChange,
      id
    } = this.props;
    return (
      <div>
        <div className="row">
        <div className="col-md-12">
            <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
              Requirement
            </span>
            <input type="text" id="instruction" name="requirement" placeholder="Please select an object"
            onChange={(event) => this.props.onChange('object', this.props.id, event.target.value)}/>
            <input type="text" id="instruction" name="requirement" placeholder="Please select a child"
            onChange={(event) => this.props.onChange('child', this.props.id, event.target.value)}/>

            <button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.id)}>
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>

          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-primary";
    return classes;
  };
}

export default Requirement;
