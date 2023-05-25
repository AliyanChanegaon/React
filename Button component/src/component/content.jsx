export default function Content({ data }) {
  console.log(data);
  function alertFunc() {
    alert(data + " says Hi");
  }

  return (
    <div>
      <button onClick={alertFunc}>{data} Click me</button>
    </div>
  );
}
