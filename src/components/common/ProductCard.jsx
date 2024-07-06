import { FiEye } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, tittle, description, price }) => {
  return (
    <>
{/*     <div className="w-64 h-3/5 rounded overflow-hidden shadow-lg m-10 text-center">
      <img
        className="h-48 m-auto p-5 "
        src={img}
        alt="Sunset in the mountains"
      ></img>
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
    </div> */}

    <div className="bg-white card-product m-5 rounded-lg shadow-md hover:scale-105 hover:shadow-xl duration-500">
        <img className="h-60 bg-cover w-full" src={img} />
      <div className="px-4 py-3 w-full">
        <span className="text-white bg-red-600 rounded mb-2 block w-1/5 p-1 text-xs">Nuevo</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{tittle}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$ {price}</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto flex gap-3">
            <Link to={`/item/${id}`}>
              <button>
              <FiEye />
              </button>
            </Link>

            <a href="#">
            <RiShoppingBagLine />
            </a>
          </div>
        </div>
      </div>
    </div>



    </>



  );
};
