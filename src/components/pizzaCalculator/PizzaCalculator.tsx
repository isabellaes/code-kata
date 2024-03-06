import { useRef, useState } from "react";

const PizzaCalculator = () => {
  const [total, setTotal] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const price = 120;

  function countTotal() {
    if (inputRef.current) {
      const total = Number(inputRef.current.value) * price;
      setTotal(total);
    }
  }

  return (
    <div className="component">
      <input type="text" ref={inputRef} placeholder="Antal pizzor" />
      <button onClick={() => countTotal()}>Count Total</button>
      <p>{total}</p>
    </div>
  );
};

export default PizzaCalculator;
