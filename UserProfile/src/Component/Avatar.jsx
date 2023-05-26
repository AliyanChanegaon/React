export default function Avatar({ imgP }) {
  // console.log(imgP);

  const AvaStyle = {
    height: "140px",
    borderRadius: "100%"
  };

  return <img style={AvaStyle} src={imgP} alt="" />;
}
