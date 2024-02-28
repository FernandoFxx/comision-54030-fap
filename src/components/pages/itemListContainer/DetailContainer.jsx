import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../productsMock";
import ItemDetail from "../../common/ItemDetail";

const DetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then((resp) => {
        setItem(resp);
        setIsLoading(false);
    });
  });

  return <>{isloading ? <h2>Cargando Producto</h2> : <ItemDetail {...item} />}</>;
};

export default DetailContainer;
