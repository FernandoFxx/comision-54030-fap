import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";


const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

const limpiarAlert = () => {
  Swal.fire({
    title: "Seguro que quieres limpiar el carrito?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Si, Limpiar",
    denyButtonText: `Cancelar`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Se limpio!", "", "success");
      clearCart()
    } else if (result.isDenied) {
      Swal.fire("Cancelado", "", "info");
    }
  });
 }
  
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <h2> nombre: {product.tittle} </h2>
          <h2> cantidad: {product.quantity} </h2>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
        </div>
      ))}

      <h2>El total a pagar es de : {total}</h2>
      <Link to="/checkout">
        <button variant="contained">Terminar compra</button>
      </Link>

      <button onClick={limpiarAlert}>Limpiar Carrito</button>
    </div>
  );
};

export default CartContainer;
