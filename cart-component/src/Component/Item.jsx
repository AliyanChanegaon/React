import { useState } from "react";

export default function Item({ Data, updateQuantity }) {
  const [totalPrice, setTotalPrice] = useState(Data.price * Data.quantity);

  const styless = {
    display: "flex",
    justifyContent: "space-around",
    border: "2px solid red",
    alignItems: "center"
  };

  const handleQuantity = (value) => {
    updateQuantity(Data.id, value);
    setTotalPrice(Data.price * Data.quantity);
  };

  return (
    <div style={styless}>
      <h2>{Data.name}</h2>
      <h3>₹{Data.price}</h3>
      <div style={{ display: "flex" }}>
        <button
          style={{ border: "none" }}
          onClick={() => handleQuantity(-1)}
          disabled={Data.quantity === 1 && true}
        >
          -
        </button>
        <h3>{Data.quantity}</h3>
        <button style={{ border: "none" }} onClick={() => handleQuantity(1)}>
          +
        </button>
      </div>
      <h3>₹{totalPrice}</h3>
    </div>
  );
}
