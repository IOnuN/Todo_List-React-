import "../style/change.css";
import { useDebouncedCallback } from "use-debounce";
type Props = {
  value: string;
  onChange: (value: string) => void;
};

function ChangeableInput({ value, onChange }: Props) {
  // const [storageArray, setStorageArray] = useState(() => {
  //   return localStorage.getItem("array") || "";
  // });
  //
  // useEffect(() => {
  //   localStorage.setItem("array", storageArray);
  // }, [storageArray]);

  const debounced = useDebouncedCallback((value) => {
    onChange(value);
  }, 1000);

  return (
    <input
      type="text"
      defaultValue={value}
      onChange={(e) => {
        debounced(e.target.value);
      }}
    />
  );
}

export default ChangeableInput;
