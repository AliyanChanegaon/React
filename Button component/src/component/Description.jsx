export default function Description({ Description }) {
  // data.Description[1]
  console.log(Object.values(Description));

  return (
    <ul>
      {Object.values(Description).map((el, idx) => (
        <li key={idx}>{el}</li>
      ))}
    </ul>
  );
}
