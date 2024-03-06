import { useRef, useState } from "react";

const ChangeText = () => {
  const [text, setText] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  function copyText() {
    if (inputRef2.current) {
      setText(inputRef2.current.value);
    }
  }

  function moveText() {
    if (inputRef.current) {
      setText2(inputRef.current.value);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }
  return (
    <div className="change-text">
      <input type="text" ref={inputRef2} />
      <button onClick={() => copyText()}>Change text</button>
      <p>{text}</p>

      <input type="text" ref={inputRef} />
      <button onClick={() => moveText()}>Move text</button>
      <p>{text2}</p>
    </div>
  );
};

export default ChangeText;
