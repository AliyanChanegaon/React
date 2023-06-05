import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import SingleCart from "./SingleCart";

export default function CartPage() {
  const { cartData, Total, setTotal } = useContext(AppContext);
  // console.log("Hello", cartData);

  let finalPrice = 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {cartData.map((el) => {
        finalPrice += el.qty * el.prize;
        return <SingleCart key={el.id} data={el} />;
      })}{" "}
      {setTotal(finalPrice)}
      <div style={{ backgroundColor: "#1146b0", width: "100%" }}>
        <h1>Total = {Total}</h1>
      </div>
    </div>
  );
}
