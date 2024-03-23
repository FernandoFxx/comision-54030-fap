import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CardSkeleton from "../../common/CardSkeleton";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;

    if (category) {
      let productsCollectionFilter = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFilter;
    }
    
    getDocs(consulta)
      .then((res) => {
        let arrayLindo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProducts(arrayLindo);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isloading) {
    return (
      <div className="flex flex-wrap justify-center m-10">
        {category ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
    );
  }
  return (
    <>
      <ItemList products={products} />
    </>
  );
};
export default ItemListContainer;
