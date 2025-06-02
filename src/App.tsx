import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";
import Item from "./components/Item";
import ChangeableInput from "./components/ChangeableInput";

function App() {
  const [items, setItems] = useState<{ title: string; id: number }[]>([]);

  const handelAddItem = (content: string) => {
    const newItem = {
      title: content,
      id: items.length,
    };
    setItems((items) => [...items, newItem]);
  };

  const title = "TODO List";

  return (
    <div className={"box"}>
      <div className={"content"}>
        <ChangeableInput value={title} />
        <ChangeableInput value="description" />
        <div className={"content_items"}>
          {items.map((item) => (
            <Item key={item.id} text={`Note ${item.id + 1}`} checked={false} />
          ))}
        </div>
        <AddItem onClick={() => handelAddItem(title)} />
      </div>
    </div>
  );
}

export default App;
