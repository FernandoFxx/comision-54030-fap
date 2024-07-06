import { ProductCard } from "../../common/ProductCard";

const ItemList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center mb-12">
          <div className="flex items-center text-center p-8  from-gray-800 to-gray-600 w-full font-[sans-serif]">
            <div className="max-w-4xl mx-auto">
              <h1 className="sm:text-4xl text-2xl font-bold text-gray-800">Encontraras La Mejor Calidad.</h1>
            </div>
          </div>

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;
