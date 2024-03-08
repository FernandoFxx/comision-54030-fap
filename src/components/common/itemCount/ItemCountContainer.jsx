import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, onAdd}) => {
  const [count, setCount] = useState(1);


  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Sin Stock");
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
