import { ProductCard } from "../../common/ProductCard";

const ItemList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center mb-12">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;
