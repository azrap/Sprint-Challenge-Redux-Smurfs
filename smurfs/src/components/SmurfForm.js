import React from "react";

class SmurfForm extends React.Component {
    state = {
        newSmurf: {
          name: "",
        age: "",
        height: ""
      }
    };
  
    changeHandler = ev => {
      ev.persist();
      let value = ev.target.value;
      if (ev.target.name === "age") {
        value = parseInt(value, 10);
      }
  
      this.setState(prevState => ({
        newSmurf: {
          ...prevState.newSmurf,
          [ev.target.name]: value
        }
      }));
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.addSmurf(this.state.newSmurf);
  
      this.setState({
        newSmurf: {
          name: "",
        age: "",
        height: ""
        }
      })
    };
  
    render() {
      return (
        <div>
          <h2>Add New Smurf</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={this.changeHandler}
              placeholder="name"
              value={this.state.newSmurf.name}
            />
            <div className="baseline" />
  
            <input
              type="number"
              name="age"
              onChange={this.changeHandler}
              placeholder="age"
              value={this.state.newSmurf.age}
              />
              <div className="baseline" />
  
            <input
              type="string"
              name="height"
              onChange={this.changeHandler}
              placeholder="height"
              value={this.state.newSmurf.height}
            />
            <div className="baseline" />
            

            <button className="form-button">Add New smurf</button>
          </form>
        </div>
      );
    }
  }
  
  export default SmurfForm;
  