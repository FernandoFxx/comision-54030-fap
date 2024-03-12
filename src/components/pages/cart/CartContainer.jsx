import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <h2> nombre: {product.tittle} </h2>
          <h2> cantidad: {product.quantity} </h2>
          <button onClick={ () => removeById(product.id) }>Eliminar</button>
        </div>
      ))}
      <Link to="/checkout">
        <button variant="contained">Terminar compra</button>
      </Link>

      <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  );
};

export default CartContainer;
