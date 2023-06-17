type InputProp = {
  value: string;
  handlingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProp) {
  return (
    <input
      value={props.value}
      placeholder="Enter something"
      onChange={props.handlingChange}
      type="text"
    />
  );
}
