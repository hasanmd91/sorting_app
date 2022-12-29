import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [numbers, setNumbers] = useState("");
  const [results, setResults] = useState([]);
  function inputhandeler(e) {
    setNumbers(e.target.value);
  }

  function onclickhandeler(e) {
    e.preventDefault();
    let arr = numbers.split(" ").join("").split(",");
    let newArr = arr.map((ele) => Number(ele));
    bubbleSort(newArr);
  }

  function bubbleSort(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    setResults(` Here is the sorted array ${arr.join(", ")}`);
  }

  return (
    <div className="container">
      <h1> Sorting App</h1>
      <div className="app">
        <div className="inputfield">
          <form onSubmit={onclickhandeler}>
            <label htmlFor="input"> Input numbers using comma: </label>
            <input
              required
              id="input"
              type="text"
              onChange={inputhandeler}
              placeholder="please input number ex :7,8,9,2,3,4 "
            />
            <button type="submit"> Buble sort </button>
          </form>
        </div>
        <p className="output ">{results}</p>
      </div>
    </div>
  );
};

export default App;
