import ItemCountContainer from "./itemCount/ItemCountContainer";

const ItemDetail = ({ img, title, description, price }) => {
  return (
    <>
      <div className="w-64 rounded overflow-hidden shadow-lg m-10">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {price}
          </span>
        </div>
        <ItemCountContainer />
      </div>
    </>
  );
};

export default ItemDetail;
