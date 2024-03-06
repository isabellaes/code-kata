import { useRef } from "react";

const ColorBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const colorBoxRef = useRef<HTMLDivElement>(null);

  function changeColor() {
    if (inputRef.current && colorBoxRef.current) {
      const color = inputRef.current.value;
      colorBoxRef.current.style.backgroundColor = color;
    }
  }
  return (
    <div className="component">
      <input type="text" ref={inputRef} />
      <button onClick={() => changeColor()}>Change color</button>
      <div ref={colorBoxRef} style={{ width: "5em", height: "5em" }}></div>
    </div>
  );
};

export default ColorBox;
