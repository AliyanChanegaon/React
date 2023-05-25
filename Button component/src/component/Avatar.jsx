export default function Avatar({ data }) {
  const myCss = {
    width: "150px",
    height: "auto",
    borderRadius: "10px",
    marginRight: "20px"
  };
  const spamCss = {
    fontSize: "25px"
  };

  return (
    <>
      {/* 2 Ways */}
      <img src={data.img} style={myCss} alt="" />
      <h1 style={spamCss}>{data.name}</h1>
      <br />
      {/* <img
        src={Myimage}
        style={{
          width: "150px",
          height: "auto",
          borderRadius: "10px"
        }}
        alt=""
      /> */}
    </>
  );
}
