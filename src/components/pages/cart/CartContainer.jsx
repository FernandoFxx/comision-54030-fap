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
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Se limpio!", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  return (
    <div>
      <div>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.img} alt="" />
              <div>
                <h2> nombre: {product.tittle} </h2>
                <h2> cantidad: {product.quantity} </h2>
                <h2> precio: {product.price}</h2>
                <button onClick={() => removeById(product.id)}>Eliminar</button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Descripcion del carrito: </h2>
        <h3>Cantidad de Productos:</h3>
        <h3>Precio total: {total}</h3>
        <h3>Descuento: </h3>
        <h3>Precio final: </h3>
        {cart.length > 0 ? (
          <div>
            <button onClick={limpiarAlert} >Vaciar carrito</button>
            <Link to="/checkout">
              <button>Finalizar Compra</button>
            </Link>
          </div>
        ):(
          <Link to="/">
            <button>Agrega Productos</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
