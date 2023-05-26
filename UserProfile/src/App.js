import AllProfile from "./Component/allProfile";
import "./styles.css";

let arr = [
  {
    Name: "Aliyan",
    img: "https://i.im.ge/2022/09/01/O3av8S.sufi-black.png",
    title: "BlockChain Developer",
    Skills: [
      {
        icon: "https://img.icons8.com/color/2x/javascript.png",
        skill: "Javascript"
      },
      {
        icon: "https://img.icons8.com/color/344/react-native.png",
        skill: "ReactJs"
      },
      { icon: "https://img.icons8.com/color/2x/python.png", skill: "Python" },
      {
        icon: "https://img.icons8.com/fluency/2x/node-js.png",
        skill: "NodeJs"
      },
      {
        icon: "https://img.icons8.com/color/344/react-native.png",
        skill: "React Native"
      }
    ]
  },
  {
    Name: "SDASDASD",
    img: "https://i.im.ge/2022/09/01/O3av8S.sufi-black.png",
    title: "BlockChain Developer",
    Skills: [
      {
        icon: "https://img.icons8.com/color/2x/javascript.png",
        skill: "asdasdasd"
      },
      {
        icon: "https://img.icons8.com/color/344/react-native.png",
        skill: "asdasd"
      },
      { icon: "https://img.icons8.com/color/2x/python.png", skill: "Python" },
      {
        icon: "https://img.icons8.com/fluency/2x/node-js.png",
        skill: "NodeJs"
      },
      {
        icon: "https://img.icons8.com/color/344/react-native.png",
        skill: "React Native"
      }
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <AllProfile data={arr} />
    </div>
  );
}
