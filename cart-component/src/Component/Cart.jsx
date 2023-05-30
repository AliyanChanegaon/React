import { useEffect, useState } from "react";
import Item from "./Item";

const arr = [
  {
    id: 1,
    name: "Biryani",
    price: 90,
    quantity: 3
  },
  {
    id: 2,
    name: "Chips",
    price: 70,
    quantity: 1
  },
  {
    id: 3,
    name: "Noodles",
    price: 100,
    quantity: 2
  }
];

export default function Cart() {
  const [foodsData, setFoodsData] = useState(arr);
  const [total, SetTotal] = useState(0);

  const getTotalValue = () => {
    let Total = 0;
    arr.forEach((data) => {
      Total += data.price * data.quantity;
      console.log(Total);
    });

    SetTotal(Total);
  };

  const updateQuantity = (id, value) => {
    console.log(id, value);

    const newArr = foodsData.map((ele) => {
      if (ele.id === id) {
        ele.quantity += value;
      }
      return ele;
    });

    console.log(newArr);
    setFoodsData(newArr);
  };

  useEffect(() => {
    getTotalValue();
  }, [foodsData]);

  return (
    <div>
      {foodsData.map((food) => (
        <Item updateQuantity={updateQuantity} Data={food} />
      ))}

      <h1>Total</h1>
      <h2>₹{total} </h2>
    </div>
  );
}
