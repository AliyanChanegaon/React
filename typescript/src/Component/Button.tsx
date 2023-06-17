type ButtonProp = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button(props: ButtonProp) {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>clickme</button>
  );
}
