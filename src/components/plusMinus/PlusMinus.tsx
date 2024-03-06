import { useRef, useState } from "react";

const PlusMinus = () => {
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
  const operationRef = useRef<HTMLSelectElement>(null);
  const [result, setResult] = useState<number | undefined>();

  const calculateResult = () => {
    if (input1Ref.current && input2Ref.current && operationRef.current) {
      const num1 = parseFloat(input1Ref.current.value);
      const num2 = parseFloat(input2Ref.current.value);
      const operation = operationRef.current.value;

      let calculatedResult: number;
      if (operation === "plus") {
        calculatedResult = num1 + num2;
      } else {
        calculatedResult = num1 - num2;
      }

      setResult(calculatedResult);
    }
  };

  return (
    <div className="component">
      <input ref={input1Ref} type="number" placeholder="Enter number 1" />
      <select ref={operationRef}>
        <option value="plus">+</option>
        <option value="minus">-</option>
      </select>
      <input ref={input2Ref} type="number" placeholder="Enter number 2" />
      <button onClick={calculateResult}>Calculate</button>
      <p>{result !== undefined ? `Result: ${result}` : ""}</p>
    </div>
  );
};

export default PlusMinus;
