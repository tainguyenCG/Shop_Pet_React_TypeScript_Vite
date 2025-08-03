import  { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./cart.css";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { myCart, total, addtoCart, setTotal } = useContext(CartContext);
  const handleCheckOut = () => {
    setTotal(0);
    addtoCart([]);
  };

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="cart-container">
        <div className="cart-header">Check Out: </div>
        <div className="cart-items">
          {myCart.map((item) => {
            return (
              <div className="cart-item">
                <img src={item.imageUrl} alt="" className="cart-item-img" />
                {item.name} :{item.price}$
              </div>
            );
          })}
          <div className="cart-total"> TOTAL : {total}$</div>
        </div>
        <button className="cart-checkout" onClick={handleCheckOut}>
          {" "}
          Done
        </button>
        <button className="cart-gohome" onClick={handleHome}>
          Home
        </button>
      </section>
    </>
  );
};

export default Cart;
