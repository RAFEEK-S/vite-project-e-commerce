import { use, useEffect, useState } from "react";
import Product from "./components/Product";
import { Header } from "./components/Header";
import { Cardproduct } from "./components/Cardproduct";

function App() {
  const [final, setFinal] = useState("");
  const [cart, setCart] = useState([]);
  const [toggle,setToggle] = useState(false)
  console.log(final);
  console.log(cart);

  const addItem = (products) => {
    setCart((prev) => [...prev, products]);
  };
  const data = async () => {
    const results = await fetch("https://fakestoreapi.in/api/products");
    const json = await results.json();
    setFinal(json.products);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <div>
        <Header setToggle={setToggle}/>
        <Cardproduct final={final} addItem={addItem} />
        {toggle && <Product setToggle={setToggle}/>}
      </div>
    </>
  );
}

export default App;
