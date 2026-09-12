import { useDispatch,useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";

const useCart = () => {
  const cartItems = useSelector((state)=> state.cart.items)   
  const dispatch = useDispatch();
//   const navigate = useNavigate();

  const addItemToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Item added to cart");
    // navigate("/cart");
  };

  const removeItemFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const increaseItemQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const decreaseItemQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const clearAllCart = () => {
    dispatch(clearCart());
  };

  return {
    addItemToCart,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearAllCart,
    cartItems
  };
};

export default useCart;