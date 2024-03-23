import { useState } from "react";
import CartWidget from "../common/CartWidget";
import { FaBars, FaHeart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="navbar">
        <nav className="bg-whiste dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="" className="h-8" alt="" />
              <span className="self-center flex text-2xl font-semibold whitespace-nowrap dark:text-white">
                Ropa Yadiis <FaHeart />
              </span>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link to="/cartContainer">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <CartWidget />
                </button>
              </Link>
            </div>
            <div className="btn-responsive flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <FaBars className="icon-menu" />
              </button>
            </div>
            <div
              className="items-center justify-between w-full md:flex md:w-auto md:order-1 max-md-hidden"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Todos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/playeras"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Playeras
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/pantalones"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Pantalones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/tenis"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Tenis
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={` z-40 w-full flex flex-col lg:hidden gap-12  origin-bottom mt-5 duration-700 ${
                !toggleMenu ? "h-0, hidden" : "h-auto, block"
              }`}
            >
              <div className="navigation-menu">
                <div className="flex flex-col gap-8 font-bold tracking-wider">
                  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <Link
                        to="/"
                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        aria-current="page"
                      >
                        Todos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/category/playeras"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Playeras
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/category/pantalones"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Pantalones
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/category/tenis"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Tenis
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
