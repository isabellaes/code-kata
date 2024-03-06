import { useRef, useState } from "react";

const List = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<string[]>([]);

  function addItem() {
    if (inputRef.current) {
      const newItem = inputRef.current.value;
      setItems((items) => [...items, newItem]);
    }
  }

  return (
    <div className="component">
      <input ref={inputRef} type="text" />
      <button onClick={() => addItem()}>Add text</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
