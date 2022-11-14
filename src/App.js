import { fireEvent } from "@testing-library/react";
import React, { useState } from "react";

const App = () => {
  const [numbers, setNumbers] = useState("");
  const [results, setResults] = useState([]);
  function inputhandeler(e) {
    setNumbers(e.target.value);
  }

  function onclickhandeler() {
    let arr = numbers.split(" ").join("").split(",");
    let newArray = arr.map((ele) => Number(ele));
    bubbleSort(newArray);
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

    setResults(` here is the sorted array ${arr.join(", ")}`);
  }

  return (
    <div>
      <input type="" onChange={inputhandeler} />
      <button onClick={onclickhandeler}> sort </button>
      <p>{results}</p>
    </div>
  );
};

export default App;
