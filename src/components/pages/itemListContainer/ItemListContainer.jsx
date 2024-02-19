import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  //solicitamos
  useEffect(() => {
    const productos = new Promise((resolve, reject) => {
      resolve(products);
    });
    //manejamos
    productos
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
