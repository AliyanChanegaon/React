import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function SingleCart({ data }) {
  const { img_url, title, prize, qty, id } = data;
  const { HandlingRemove, setTotal, HandlingQuantity } = useContext(AppContext);

  // console.log("inside single cart", data);
  const imgStyle = {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    marginTop: "2.5%",
    width: "75%",
    height: "180px"
  };

  const buttonStyle = {
    width: "110px",
    marginBottom: "20px",
    height: "50px",
    fontSize: "22px",
    color: "white",
    outline: "none",
    border: "none",
    backgroundColor: "red"
  };

  const RemoveFunc = () => {
    HandlingRemove(id);
  };

  const qtyfunc = (value, id) => {
    HandlingQuantity(value, id);
  };
  return (
    <div style={{ display: "flex", border: "4px solid #e3dfde" }}>
      <div>
        <img style={imgStyle} src={img_url} alt="" />
        <h1>{title}</h1>
      </div>

      <div style={{ margin: "auto", marginRight: "20px" }}>
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <button
            style={{
              width: "35px",
              fontSize: "30px",
              backgroundColor: "red",
              color: "white"
            }}
            onClick={() => {
              qtyfunc(-1, id);
            }}
          >
            -
          </button>
          <h3>{qty}</h3>
          <button
            style={{
              width: "35px",
              fontSize: "30px",
              backgroundColor: "green",
              color: "white"
            }}
            onClick={() => {
              qtyfunc(1, id);
            }}
          >
            +
          </button>
        </div>

        <div>
          <h1>Rs:{prize}</h1>
          <button style={buttonStyle} onClick={RemoveFunc}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
