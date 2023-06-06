import { useParams } from "react-router-dom";

export default function SingleUser() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
