import "./styles.css";
import Container from "./component/Container";

const arr = [
  {
    img: "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
    name: "Aliyan",
    Description: {
      1: "HTML",
      2: "CSS",
      3: "Javascript"
    }
  },

  {
    img: "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
    name: "Sufi",
    Description: {
      1: "HTML",
      2: "CSS",
      3: "Javascript"
    }
  },

  {
    img: "https://i.im.ge/2022/07/29/Fwb5aG.jpg",
    name: "Sufiyan",
    Description: {
      1: "HTML",
      2: "CSS",
      3: "Javascript",
      4: "React"
    }
  }
];

export default function App() {
  return (
    <div className="App">
      {arr.map((el) => (
        <Container data={el} />
      ))}
    </div>
  );
}
