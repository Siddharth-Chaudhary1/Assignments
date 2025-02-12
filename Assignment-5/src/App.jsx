import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let output;
    switch (operation) {
      case "add":
        output = number1 + number2;
        break;
      case "subtract":
        output = number1 - number2;
        break;
      case "multiply":
        output = number1 * number2;
        break;
      case "divide":
        if (number2 === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        output = number1 / number2;
        break;
      default:
        output = "";
    }

    setResult(`Result: ${output}`);
  };

  return (
    <div className="calculator">
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br />
      <button onClick={() => calculate("add")}>+</button>
      <button onClick={() => calculate("subtract")}>-</button>
      <button onClick={() => calculate("multiply")}>*</button>
      <button onClick={() => calculate("divide")}>/</button>
      <div className="output">{result}</div>
    </div>
  );
}

export default App;
