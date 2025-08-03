import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import DogsPage from "./components/DogsPage/DogsPage";
import Cart from "./components/Cart/Cart";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { CartContext, type Dog } from "./Context/CartContext";

function App() {
  const [allDogs, setAllDogs] = useState([]);
  const [myCart, addtoCart] = useState<Dog[]>([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function getData() {
      console.log("Đang gọi API");
      try {
        const res = await axios.get("/v1/dogs");
        setAllDogs(res.data);
      } catch (err) {
        console.error("Lỗi gọi API:", err);
      }
    }
    getData();
  }, []);

  return (
    <CartContext.Provider value={{ myCart, addtoCart, total, setTotal }}>
      <BrowserRouter>
        <Nav />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DogsPage" element={<DogsPage allDogs={allDogs} />} />
            <Route path="/Cart" element={<Cart />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
