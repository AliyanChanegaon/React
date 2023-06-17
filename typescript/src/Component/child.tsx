

type ChildPorp = {
  children: React.ReactNode;
};

export default function Child(props: ChildPorp) {
  return <div>{props.children}</div>;
}
