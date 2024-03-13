import { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {getTotalItems} = useContext (CartContext);

  let total = getTotalItems()
  return (
    <div className="cart">
        <span>{ total }</span>
        <div> <FaOpencart className="icon-cart"/> </div> 
    </div>
  )
}

export default CartWidget