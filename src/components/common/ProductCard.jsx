import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, tittle, description, price }) => {
  return (
    <div className="w-64 h-3/5 rounded overflow-hidden shadow-lg m-10 text-center">
      <img
        className="h-48 m-auto p-5 "
        src={img}
        alt="Sunset in the mountains"
      />
      <div className="px-6 mx-4 py-4 border-t border-slate-200">
        <div className="font-bold text-xl mb-2">{tittle}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 py-4 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          $ {price}
        </span>
      </div>
      <div>
        <Link to={`/item/${id}`}>
          <button className="px-6  py-4 shadow-lg m-10 bg-gray-200 rounded-full text-center">
            Detalles
          </button>
        </Link>
      </div>
    </div>
  );
};
