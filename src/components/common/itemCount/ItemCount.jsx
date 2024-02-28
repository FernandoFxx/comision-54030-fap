const ItemCount = ({ sum, res, count }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full" onClick={res} disabled={count === 1 ? true : false}>-</button>
      <h4 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">{count}</h4>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full" onClick={sum}>+</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
