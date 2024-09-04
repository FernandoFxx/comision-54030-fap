import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import { FaHeart } from "react-icons/fa6";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar shadow">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="text-rose-400 self-center flex text-2xl font-semibold whitespace-nowrap">
            Ropa Yadiis <FaHeart />
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/cartContainer">
            <button
              type="button"
              className="text-rose-400 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              <CartWidget />
            </button>
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleClick}>
              Todos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/category/playeras"
              className="nav-links px-3" onClick={handleClick}
            >
              Playeras
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/category/pantalones"
              className="nav-links px-3" onClick={handleClick}
            >
              Pantalones
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/category/tenis"
              className="nav-links px-3" onClick={handleClick}
            >
              Tenis
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

          {click ? (
            <span className="icon">
              <IoCloseSharp />{" "}
            </span>
          ) : (
            <span className="icon">
              <RiMenu5Fill />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};