import { useState } from "react";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Maximo",
        text: "No hay mas unidades en stock!",
      });
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return <ItemCount sum={sumar} res={restar} count={count} onAdd={onAdd} />;
};

export default ItemCountContainer;
