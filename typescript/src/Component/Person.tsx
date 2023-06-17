import { PersonProp } from "./TypeSpecifier";

export default function Person(prop: PersonProp) {
  return (
    <div>
      <h1>
        {prop.name.first} {prop.name.last}
      </h1>
    </div>
  );
}
