import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import CartPage from "./Cartpage";
import Productlist from "./Productlist";

export default function DisplayCart() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h1>Product</h1>
        <Productlist />
      </div>

      <div>
        <h1>Cart</h1>
        <CartPage />
      </div>
    </div>
  );
}
