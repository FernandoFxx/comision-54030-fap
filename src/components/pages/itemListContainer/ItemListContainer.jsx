import { useState, useEffect } from "react";
import { getProducts } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CardSkeleton from "../../common/CardSkeleton";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        setProducts(productsFilter);
      } else {
        setProducts(resp);
      }
      setIsLoading(false);
    });
  }, [category]);

  if (isloading) {
    return (
      <div className="flex flex-wrap m-10">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
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
