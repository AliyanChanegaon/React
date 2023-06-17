type PersonlistProps = {
  names: {
    first?: string;
    last: string;
  }[];
};

export default function Personlist(props: PersonlistProps) {
  return (
    <div>
      {props.names?.map((name) => {
        return (
          <h1>
            First name {name.first} / last name {name.last}
          </h1>
        );
      })}
    </div>
  );
}
