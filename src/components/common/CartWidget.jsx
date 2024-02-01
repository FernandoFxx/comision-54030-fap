import { FaOpencart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cart">
        <span>10</span>
        <div> <FaOpencart className="icon-cart"/> </div> 
    </div>
  )
}

export default CartWidget