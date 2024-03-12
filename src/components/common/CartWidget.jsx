import { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const {cart} = useContext( CartContext )
  return (
    <div className="cart">
        <span>{ cart.length }</span>
        <div> <FaOpencart className="icon-cart"/> </div> 
    </div>
  )
}

export default CartWidget