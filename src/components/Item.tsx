import "../style/item.css";
import ChangeableInput from "./ChangeableInput.tsx";

type Props = {
  id: string;
  text: string;
  checked: boolean;
  onChangeContent: (id: string, content: string) => void;
  onToggleChecked: (id: string) => void;
};

function Item({ id, text, checked, onChangeContent, onToggleChecked }: Props) {
  const handleSave = (newContent: string) => {
    onChangeContent(id, newContent);
  };
  return (
    <div className={"item"}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggleChecked(id)}
      />
      <ChangeableInput value={text} onChange={handleSave} />
    </div>
  );
}

export default Item;
