import { useRef } from "react";

const PrettyText = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const boldCheckboxRef = useRef<HTMLInputElement>(null);
  const italicCheckboxRef = useRef<HTMLInputElement>(null);
  const largerCheckboxRef = useRef<HTMLInputElement>(null);
  const textStyleRef = useRef<HTMLParagraphElement>(null);

  function formatText() {
    if (inputRef.current && textStyleRef.current) {
      if (boldCheckboxRef.current && boldCheckboxRef.current.checked) {
        textStyleRef.current.style.fontWeight = "bold";
      }
      if (italicCheckboxRef.current && italicCheckboxRef.current.checked) {
        textStyleRef.current.style.fontStyle = "italic";
      }
      if (largerCheckboxRef.current && largerCheckboxRef.current.checked) {
        textStyleRef.current.style.fontSize = "larger";
      }
      textStyleRef.current.innerHTML = inputRef.current.value;
    }
  }

  return (
    <div className="component">
      <input ref={inputRef} type="text" />
      <label>
        <input ref={boldCheckboxRef} type="checkbox" />
        Bold
      </label>
      <label>
        <input ref={italicCheckboxRef} type="checkbox" />
        Italic
      </label>
      <label>
        <input ref={largerCheckboxRef} type="checkbox" />
        Larger Text
      </label>
      <button onClick={() => formatText()}>Format Text</button>
      <p ref={textStyleRef}></p>
    </div>
  );
};

export default PrettyText;
