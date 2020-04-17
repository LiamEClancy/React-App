import React, { Component } from "react";
import NavBar from "./components/navbar";
import Steps from "./components/steps";

class App extends Component {
  state = {
    projectName: "",
    steps: [
      {
        id: 0,
        instruction: "",
        location: {
          x: -400,
          y: 20,
          z: 110
        },
        requirements: [
          {
            id: 0,
            object: "",
            child: ""
          }
        ]
      }
    ]
  };

  handleAdd = () => {
    const steps = [...this.state.steps];
    let highestId = -1;

    for (let i = 0; i < steps.length; i++) {
      if (steps[i].id > highestId) {
        highestId = steps[i].id;
      }
    }

    let nextId = highestId+1;

    let newStep = {
      id: nextId,
      instruction: "",
      location: {
        x: -400,
        y: 20,
        z: 110
      },
      requirements: [
        {
          id: 0,
          object: "",
          child: ""
        }
      ]
    };
    let joined = this.state.steps.concat(newStep);
    this.setState({ steps: joined });
  };

  handleRequirement = (step) => {
    let steps = [...this.state.steps];
    let id = step.id;
    let index = 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].id === id) {
        index = i;
      }
    }

    let highestReqId = 0;
    for (let i = 0; i < step.requirements.length; i++) {
      if (step.requirements[i].id > highestReqId) {
        highestReqId = step.requirements[i].id;
      }
    }

    let newRequirement = {
      id: highestReqId+1,
      object: "",
      child: ""
    }

    let joined = this.state.steps[index].requirements.concat(newRequirement);
    steps[index].requirements = joined;
    console.log(joined);
    this.setState({ steps: steps });
  };

  handleDelete = (step) => {
    let id = step.id;
    const steps = this.state.steps.filter(c => c.id !== id);
    this.setState({ steps });
  };

  handleSave = () => {
    console.log(this.state);
  };

  handleProjectChange = (text) => {
    this.state.projectName = text;
  }

  handleStepChange = (field, id, text) => {
    let index = 0;
    for (let i = 0; i < this.state.steps.length; i++) {
      if (this.state.steps[i].id === id) {
        index = i;
      }
    }

    if (field === 'instruction') {
      this.state.steps[index].instruction = text;
    } else if (field === 'x') {
      console.log(this.state.steps[index].location.x);
      this.state.steps[index].location.x = parseFloat(text);
    } else if (field === 'y') {
      this.state.steps[index].location.y = parseFloat(text);
    } else {
      this.state.steps[index].location.z = parseFloat(text);
    }
  }

  handleUp = (step) => {
    let steps = [...this.state.steps]
    let id = step.id;
    let index = 0;

    for (let i = 0; i < steps.length; i++) {
      if (steps[i].id === id) {
        index = i;
      }
    }

    if (steps[0].id === id) {
    } else {
      console.log('good Top')
        let tempStep = steps[index-1];
        steps[index-1] = steps[index];
        steps[index] = tempStep;
    }
    this.setState({ steps })
  }

  handleDown = (step) => {
    let steps = [...this.state.steps]
    let id = step.id;
    let index = 0;

    for (let i = 0; i < steps.length; i++) {
      if (steps[i].id === id) {
        index = i;
      }
    }

    if (steps[steps.length - 1].id === id) {
    } else {
      console.log('good Top')
        let tempStep = steps[index + 1];
        steps[index + 1] = steps[index];
        steps[index] = tempStep;
    }
    this.setState({ steps })
  }

  render() {
    return (
      <div>
        <NavBar
          onChange={this.handleProjectChange}
          onSave={this.handleSave}
        />
        <main className="container">
          <Steps
          steps={this.state.steps}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
            onAdd={this.handleAdd}
            onSave={this.handleSave}
            onChange={this.handleStepChange}
            onUp={this.handleUp}
            onDown={this.handleDown}
            onRequirement={this.handleRequirement}
          />
        </main>
      </div>
    );
  }
}

export default App;
