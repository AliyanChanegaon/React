import Content from "./content";
import Avatar from "./Avatar";
import Description from "./Description";

export default function Container({ data }) {
  // console.log()
  const DefaultCSS = {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-around",
    backgroundColor: "gray",
    borderRadius: "10px"
  };

  return (
    <div style={DefaultCSS}>
      {/* <Content /> */}
      <Avatar data={data} />

      <Description Description={data.Description} />
      <Content data={data.name} />

      {/* {console.log(<Avatar Myimage="https://i.im.ge/2022/07/29/Fwb5aG.jpg" />)} */}
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
