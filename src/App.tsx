import "./App.css";
import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import Item from "./components/Item";
import ChangeableInput from "./components/ChangeableInput";

type Item = {
  title: string;
  id: string;
  checked: boolean;
};

const getItemsFromLocalStorage = () => {
  const items = localStorage.getItem("items") ?? "[]";
  return JSON.parse(items);
};

const uuid = () => Math.random().toString(36).substr(2);

const setItemsToLocalStorage = (items: Item[]) => {
  localStorage.setItem("items", JSON.stringify(items));
};

function App() {
  const [items, setItems] = useState<Item[]>(getItemsFromLocalStorage);
  const [title, setTitle] = useState(() => {
    return localStorage.getItem("title") || "TODO List";
  });

  const [description, setDescription] = useState(() => {
    return localStorage.getItem("description") || "description";
  });

  useEffect(() => {
    localStorage.setItem("description", description);
  }, [description]);

  useEffect(() => {
    localStorage.setItem("title", title);
  }, [title]);

  const handleChangeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };
  const handleChangeDescription = (newDescription: string) => {
    setDescription(newDescription);
  };
  const handelAddItem = (content: string) => {
    const newItem = {
      title: content,
      checked: false,
      id: uuid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setItemsToLocalStorage(newItems);
  };

  const handleChangeContent = (id: string, newContent: string) => {
    const newItems = [...items];
    const index = newItems.findIndex((item) => item.id === id);
    newItems[index].title = newContent;
    setItems(newItems);
    setItemsToLocalStorage(newItems);
  };
  const handleToggleChecked = (id: string) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(newItems);
    setItemsToLocalStorage(newItems);
  };

  return (
    <div className={"box"}>
      <div className={"content"}>
        <ChangeableInput value={title} onChange={handleChangeTitle} />
        <ChangeableInput
          value={description}
          onChange={handleChangeDescription}
        />
        <div className={"content_items"}>
          {items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              checked={item.checked}
              text={item.title}
              onChangeContent={handleChangeContent}
              onToggleChecked={handleToggleChecked}
            />
          ))}
        </div>
        <AddItem onClick={() => handelAddItem("New note")} />
      </div>
    </div>
  );
}

export default App;
