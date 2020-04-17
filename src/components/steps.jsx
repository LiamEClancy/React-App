import React, { Component } from "react";
import Step from "./step";

class Steps extends Component {
  render() {
    const {
      onDelete,
      onAdd,
      onSave,
      onChange,
      steps,
      onUp,
      onDown,
      onRequirement
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={onAdd}>
          <i className="fa fa-plus-circle" aria-hidden="true" />
        </button>

        {this.props.steps.map(step => (
          <Step
            key={step.id}
            step={step}
            onDelete={onDelete}
            onSave={onSave}
            onChange={onChange}
            onUp={onUp}
            onDown={onDown}
            onRequirement={onRequirement}
          />
        ))}
      </div>
    );
  }
}

export default Steps;
