import "../style/add.css";

type Props = {
  onClick: VoidFunction;
};

function AddItem({ onClick }: Props) {
  return (
    <button className="circle" onClick={onClick}>
      +
    </button>
  );
}

export default AddItem;
