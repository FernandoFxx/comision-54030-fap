import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();
  return (
    <div className="cart">
      <span>{total}</span>
      <div>
        {" "}
        <FaCartShopping className="icon-cart" />{" "}
      </div>
    </div>
  );
};

export default CartWidget;
