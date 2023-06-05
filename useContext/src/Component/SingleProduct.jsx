import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function SingleProduct({ data, setisAddedtoCart }) {
  const { img_url, title, prize } = data;

  const { isAddedtoCart, handleCart } = useContext(AppContext);
  console.log(isAddedtoCart);

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "300px",
    border: "4px solid #e3dfde",
    marginBottom: "20px",
    borderRadius: "10px"
  };

  const imgStyle = {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    marginTop: "2.5%",
    width: "95%",
    height: "220px"
  };
  const buttonStyle = {
    width: "150px",
    marginBottom: "20px",
    height: "50px",
    fontSize: "22px",
    borderRadius: "8px",
    outline: "none",
    border: "none",
    backgroundColor: "#f6be00"
  };

  const HandlingAdd = () => {
    handleCart(data);
  };

  return (
    <div style={style}>
      <img src={img_url} style={imgStyle} alt="" />
      <h2>{title}</h2>
      <h2>Rs:{prize}</h2>
      <button style={buttonStyle} onClick={HandlingAdd}>
        Add to Cart
      </button>
    </div>
  );
}
