import { useState } from "react";

export default function Name({ name }) {
  const [Follow, setFollow] = useState(false);
  console.log(name);
  const mainDiv = {
    display: "flex",
    //  flexDirection:"column",
    width: "fit-content",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center"
  };
  let NameStyle = {
    outline: "none",
    color: "white",
    backgroundColor: "black",
    height: "35px",
    width: "120px",
    fontSize: "large"
  };

  let NameStyleChange = {
    outline: "none",
    color: "white",
    backgroundColor: "blue",
    height: "35px",
    width: "120px",
    fontSize: "large"
  };

  function buttonChange() {
    setFollow(!Follow);
    alert(`${Follow ? "Unfollowed" : "Following"}    ${name}`);
    // document.querySelector("button").innerText === "Follow"
    //   ? (document.querySelector("button").innerText = "Following")
    //   : (document.querySelector("button").innerText = "Follow");
  }
  return (
    <div style={mainDiv}>
      <h1>{name}</h1>
      <button
        style={Follow ? NameStyle : NameStyleChange}
        onClick={buttonChange}
      >
        {Follow ? "Following" : "Follow"}
      </button>
    </div>
  );
}
