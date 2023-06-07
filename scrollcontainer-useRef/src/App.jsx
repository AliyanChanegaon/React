import { useRef } from "react";
import "./styles.css";

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

export default function App() {
  const ref = useRef(null);
  const TopScroll = () => {
    ref.current.scrollTop = 0;
  };

  const BottomScroll = () => {
    ref.current.scrollTop = ref.current.scrollHeight;
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={TopScroll}>Top</button>
      <button onClick={BottomScroll}>Bottom</button>
      <div className="container">
        <div className="cart" ref={ref}>
          {ProductsData.map((el) => {
            return (
              <>
                <img src={el.img_url} alt={el.img_url} />
                <h1>{el.title}</h1>
                <p>{el.prize}</p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
