import "./App.css";
import { type ChangeEvent, useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import Item from "./components/Item";
import ChangeableInput from "./components/ChangeableInput";

function App() {
  // const [title, setTitle] = useState("TODO list");
  // const [description, setDescription] = useState("Description");
  const [items, setItems] = useState([]);

  // const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };
  // const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
  //   setDescription(e.target.value);
  // };

  const handelAddItem = (content: string) => {
    const newItem = {
      title: content,
      id: items.length,
    };
    setItems((items) => [...items, newItem]);
  };

  const [title, setTitle] = useState("www");
  const handleChangeTitle = (v: string) => {
    setTitle(v);
  };
  console.log("title", title);

  return (
    <div className={"box"}>
      <div className={"content"}>
        <ChangeableInput value={title} onChange={handleChangeTitle} />
        <div className={"content_items"}>
          {items.map((item) => (
            <Item key={item.id} />
          ))}
        </div>
        <AddItem onClick={() => handelAddItem(title)} />
      </div>
    </div>
  );
}

export default App;
