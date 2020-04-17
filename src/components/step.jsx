import React, { Component } from "react";
import Requirement from "./requirement"

class Step extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
            <div>
                <label>
                  <input type="text" id="instruction" name="instruction" placeholder="Please enter an instruction"
                  onChange={(event) => this.props.onChange('instruction', this.props.step.id, event.target.value)}/>
                </label><br></br>
                <label>
                <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
                  Location
                </span>
                  <input type="text" id="x" name="xPos" placeholder="-400" onChange={(event) => this.props.onChange('x', this.props.step.id, event.target.value)}/>
                  <input type="text" id="y" name="yPos" placeholder="20" onChange={(event) => this.props.onChange('y', this.props.step.id, event.target.value)}/>
                  <input type="text" id="z" name="zPos" placeholder="110" onChange={(event) => this.props.onChange('z', this.props.step.id, event.target.value)}/>
                </label>
            </div>
          </div>
          <div className="col-md-4">
            <button className="btn btn-secondary" onClick={() => this.props.onUp(this.props.step)}>
              <i className="fa fa-arrow-up" aria-hidden="true" />
            </button>

            <button className="btn btn-info m-2" onClick={() => this.props.onDown(this.props.step)}>
              <i className="fa fa-arrow-down" aria-hidden="true" />
            </button>

            <button className="btn btn-info m-2" onClick={() => this.props.onRequirement(this.props.step)}>
              <i className="fa fa-chevron-circle-down" aria-hidden="true" />
            </button>

            <button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.step)}>
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
        {this.props.step.requirements.map(requirement => (
          <Requirement
            id={requirement.id}
            onDelete={this.handleDelete}
            onChange={this.handleChange}
          />
        ))}
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.step.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    return "Instructions";
  };

  handleDelete = (id) => {

    const requirements = this.props.step.requirements.filter(c => c.id !== id);
    console.log(requirements);
    this.props.step.requirements = requirements;
    console.log(this.props.step.requirements);
    this.forceUpdate();
  };

  handleChange = (field, id, text) => {
    let index = 0;
    for (let i = 0; i < this.props.step.requirements.length; i++) {
      if (this.props.step.requirements[i].id === id) {
        index = i;
      }
    }
    if (field === 'object') {
      this.props.step.requirements[index].object = text;
      console.log(this.props.step.requirements[index].id);
    } else {
      this.props.step.requirements[index].child = text;
      console.log(this.props.step.requirements);
    }
  };

}



export default Step;
