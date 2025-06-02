import "../style/change.css";
import { type ChangeEvent, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

function ChangeableInput({ value, onChange }: Props) {
  const debounced = useDebouncedCallback((value) => {
    onChange(value);
  }, 1000);

  return (
    <input
      type="text"
      defaultValue={value}
      onChange={(e) => debounced(e.target.value)}
    />
  );
}

export default ChangeableInput;
