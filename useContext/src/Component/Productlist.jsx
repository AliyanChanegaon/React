import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import SingleProduct from "./SingleProduct";

export default function Productlist() {
  const { data } = useContext(AppContext);

  return (
    <div>
      {data.map((el) => {
        return <SingleProduct key={el.id} data={el} />;
      })}
    </div>
  );
}
