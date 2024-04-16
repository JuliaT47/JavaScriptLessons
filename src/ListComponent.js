import { useState } from "react";
import ListItemComponent from "./ListItemComponent";
import ButtonComponent from "./ButtonComponent";
import { v4 as uuidv4 } from "uuid";

const ListComponent = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([{ id: uuidv4(), name: "First Element" }]);

  const onClickHandle = () => {
    if (input.trim() !== "") {
      const newItem = { id: uuidv4(), name: input };
      setItems([...items, newItem]);
      setInput("");
    }
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <input value={input} onChange={onChangeHandler} />
      <ul>
        {items.map((item) => (
          <ListItemComponent key={item.id} element={item.name}>
            <ButtonComponent
              text={"Delete"}
              onClick={() => handleDelete(item.id)}
              type={"button"}
            />
          </ListItemComponent>
        ))}
      </ul>
      <button onClick={onClickHandle}>Add a new element</button>
    </>
  );
};

export default ListComponent;
