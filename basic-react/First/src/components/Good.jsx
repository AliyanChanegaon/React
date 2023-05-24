import { useState } from "react";
import { InputMy } from "./Input";

const products = [
  { title: "Cabbage", isFruit: false, id: 1, number: 1 },
  { title: "Garlic", isFruit: false, id: 2, number: 2 },
  { title: "Apple", isFruit: true, id: 3, number: 5 },
];

function Good() {
  const [productData, setproductData] = useState(products);

  function appendData(value) {
    let data = { title: value, isFruit: false, id: 4, number: 2 };
    setproductData([...productData, data]);
  }
  return (
    <div>

        <InputMy appendData={appendData}   />

        
      <div>
        {productData.map((el) => (
          <div style={{ display: "flex", gap: "20px" }}>
            <h1 key={el.id}>{el.title}</h1>
            <button key={el.id}>{el.number}</button>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Good;
