import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = { data: "", sortedArray: "" };

  inputHandeler = (e) => {
    this.setState({
      data: e.target.value.split(","),
    });
    console.log(this.state.data);
  };
  resethandeler = () => {
    this.setState({ data: "", sortedArray: "" });
  };

  sumbmitHandeler = () => {
    this.bubblesort(this.state.data);
  };

  bubblesort = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < array.length; k++) {
        if (array[k] > array[k + 1]) {
          let temp = array[k];
          array[k] = array[k + 1];
          array[k + 1] = temp;
        } else break;
      }
    }
    this.setState({ sortedArray: array.join(", ") });
  };

  render() {
    return (
      <div className="container">
        <h1> Array sorting App</h1>
        <div className="app">
          <div className="inputfield">
            <label htmlFor="sort" name=" sort ">
              Input number ex:2,3,4,5,6 "use coma" and sort the Array:
            </label>
            <input
              id="sort "
              type="text"
              onChange={this.inputHandeler}
              value={this.state.data}
            />
            <div className="button_wrapper">
              <button onClick={this.sumbmitHandeler}> Sort</button>
              <button onClick={this.resethandeler}> Reset </button>
            </div>
          </div>
          <div className="output">{this.state.sortedArray}</div>
        </div>
      </div>
    );
  }
}
