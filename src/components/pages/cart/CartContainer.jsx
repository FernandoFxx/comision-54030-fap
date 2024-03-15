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
    <div className="card-cart justify-evenly mt-12">
      <div className="container w-3/5 ">
        {cart.map((product) => {
          return (
            <div className="contenido flex justify-evenly bg-gray-200 rounded-lg" key={product.id}>
              <img className="w-1/5 p-3" src={product.img} alt="" />
              <div className="flex items-center text-center">
                <h2 className="px-5"> Nombre <br /> {product.tittle} </h2>
                <h2 className="px-5"> Cantidad <br /> {product.quantity} </h2>
                <h2 className="px-5"> Precio <br /> {product.price}</h2>
              </div>
                <button className="w-3/12 h- bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => removeById(product.id)}>Eliminar</button>
            </div>
          );
        })}
      </div>
      <div>

        <h1 className="text-center my-4 text-2xl">Precio total: {total}</h1>

        {cart.length > 0 ? (
          <div className="justify-center flex">
            <button className="bg-blue-500 mx-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={limpiarAlert} >Vaciar carrito</button>
            <Link to="/checkout">
              <button className="bg-green-500 mx-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Finalizar Compra</button>
            </Link>
          </div>
        ):(
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Agrega Productos</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
