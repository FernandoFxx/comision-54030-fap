import ItemCountContainer from "../../common/itemCount/ItemCountContainer";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-64 rounded overflow-hidden shadow-lg m-10 text-center">
        <img className="w-full p-5" src={item.img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.tittle}</div>
          <p className="text-gray-700 text-base">{item.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            $ {item.price}
          </span>
        </div>
        {initial ? <h3 className="mb-3">Ya tienes {initial} en el carrito </h3> : <h2 className="mb-3">No tienes unidades</h2>}
        <ItemCountContainer
          stock={item.stock}
          onAdd={onAdd}
          initial={initial}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
