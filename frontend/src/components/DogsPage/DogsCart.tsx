import React, { useContext, useState } from "react";
import "./dogs.css";
import { CartContext } from "../../Context/CartContext";

interface DogsCartProps {
  name: string;
  breed: string;
  description: string;
  price: number;
  imageUrl: string;
}

const DogsCart: React.FC<DogsCartProps> = ({ name, breed, description, price, imageUrl }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addtoCart, setTotal } = useContext(CartContext);

  const handleclick = () => {
    setIsAdded(true);
    const newItems = {
      name: name,
      price: price,
      imageUrl: imageUrl,
    };
    addtoCart((prev) => [...prev, newItems]);
    setTotal((total) => (total += Number(price)));
  };

  return (
    <section className="dogs">
      <div className="dogs-info">
        <p>{name}</p>
        <p>
          <strong>Breed:</strong> {breed}
        </p>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt={name} />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">
          <strong>Price:</strong> ${price}
        </div>
      </div>

      {isAdded ? (
        <button disabled className="dogs-btn-disabled">
          ADDED
        </button>
      ) : (
        <button className="dogs-btn" onClick={handleclick}>
          ADD TO CART
        </button>
      )}
    </section>
  );
};

export default DogsCart;
