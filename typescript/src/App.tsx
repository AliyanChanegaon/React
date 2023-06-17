import "./styles.css";
import Styler from "./Component/Style";
import First from "./Component/first";
import Person from "./Component/Person";
import Personlist from "./Component/Personlist";
import Child from "./Component/child";
// import Loggedin from "./Component/State/useStatte";

import ReduceFunc from "./Component/State/usereducerr";
import Button from "./Component/Button";
import Input from "./Component/Input";
import Loggedin from "./Component/State/useStatte";

// interface personName {
//   [key: string]: string | boolean;
// }

export default function App() {
  const personName = {
    first: "Aliyan",
    last: "Chanegaon"
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Prince",
      last: "Sufi"
    }
  ];

 

  // interface objProps {
  //   [key: string]: Array<{ [key: string]: string
  //      | boolean
  //       | number
  //        | { [key: string]: string} }>;
  // }

  // const obj : objProps = {
  //   arr1: nameList,
  //   arr2: nameList
  // };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <First name="Aliyan" messageCount={20} islOggedIn={true} />
      <Person name={personName} />
      <Personlist names={nameList} />
      <Child>
        <h1>Children prop</h1>
      </Child>
      <Button
        handleClick={(event, id) => {
          console.log("Button click", event, id);
        }}
      />
      <Input handlingChange={(event) => console.log(event.target.value)} />
      <Styler styles={{ border: "2px solid red", padding: "1rem" }} />
      <Loggedin />

      <ReduceFunc />
    </div>
  );
}
