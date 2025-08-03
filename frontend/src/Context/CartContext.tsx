import { createContext } from "react";

// Interface cho một dog
export interface Dog {
  id?: number; 
  name: string;
  breed?: string;
  description?: string;
  price: number;
  imageUrl: string;
}

// Interface cho context
interface CartContextType {
  myCart: Dog[];
  addtoCart: React.Dispatch<React.SetStateAction<Dog[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

// Tạo context mặc định
export const CartContext = createContext<CartContextType>({
  myCart: [],
  addtoCart: () => {},
  total: 0,
  setTotal: () => {},
});
