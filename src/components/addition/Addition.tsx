import { useRef, useState } from "react";

const Addition = () => {
  const [number, setNumber] = useState<number>(0);
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  function countTotal() {
    if (inputRef1.current && inputRef2.current) {
      const sum =
        Number(inputRef1.current.value) + Number(inputRef2.current.value);
      setNumber(sum);
      inputRef1.current.value = "";
      inputRef2.current.value = "";
      inputRef1.current.focus();
    }
  }
  return (
    <div className="component">
      <input type="text" ref={inputRef1} />
      <input type="text" ref={inputRef2} />
      <button onClick={() => countTotal()}>Count total</button>
      <p>{number}</p>
    </div>
  );
};

export default Addition;
