import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";

const DetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);
  const initial = getTotalQuantityById(+id)

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  return (
    <>
      {isloading ? (
        <h2>Cargando Producto</h2>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} initial={initial} />
      )}
    </>
  );
};

export default DetailContainer;
