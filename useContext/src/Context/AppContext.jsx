import { createContext, useState } from "react";

//1 create context
let ProductsData = [
  {
    id: 1,
    title: "Noodles",
    prize: 30,
    qty: 1,
    img_url:
      "https://thumbs.dreamstime.com/b/bowl-chinese-noodles-vegetables-white-background-30440348.jpg"
  },
  {
    id: 2,
    title: "Biryani",
    prize: 90,
    qty: 1,
    img_url:
      "https://bali.queenstandoor.com/blog/wp-content/uploads/2019/11/vegetable-biryani.png"
  },
  {
    id: 3,
    title: "Chips",
    prize: 10,
    qty: 1,
    img_url:
      "https://www.bigbasket.com/media/uploads/p/xxl/40202278-2_5-lays-potato-chips-indian-magic-masala-best-quality-crunchy.jpg"
  }
];
export const AppContext = createContext();

//2. custom function
const AppContextProvider = ({ children }) => {
  // Pass state here

  const [Total, setTotal] = useState(0);
  const [cartData, setCartData] = useState([]);

  const handleCart = (data) => {
    if (cartData.indexOf(data) !== -1) {
      alert("Already added");
      return;
    }
    alert("added to cart");
    setCartData([...cartData, data]);
  };

  const HandlingRemove = (id) => {
    // console.log("Handling remove", id);
    const arr = cartData.filter((el) => {
      return el.id !== id;
    });
    setCartData([...arr]);
  };

  const HandlingQuantity = (value, id) => {
    console.log("handlingQu", id, value);
    const arr = cartData.map((el) => {
      if (el.id === id) {
        el.qty = el.qty + value;
        return el;
      }
      return el;
    });
    setCartData([...arr]);
  };

  return (
    <AppContext.Provider
      value={{
        data: ProductsData,
        handleCart,
        cartData,
        HandlingRemove,
        Total,
        setTotal,
        HandlingQuantity
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
