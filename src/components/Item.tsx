import "../style/item.css";
import { useState } from "react";
import ChangeableInput from "./ChangeableInput.tsx";
type Props = {
  text: string;
  checked: boolean;
};

function Item({ text }: Props) {
  const [checked, setChecked] = useState(false);

  const handleCheckedChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={"item"}>
      <input type="checkbox" checked={checked} onChange={handleCheckedChange} />
      <ChangeableInput value={text} />
    </div>
  );
}

export default Item;
