import { Link } from "react-router-dom";

const Footer = () => {
  return <div>
    

<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow max-md:lg md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <Link to="/about" className="hover:underline">Ropa Yadiis</Link>. All Rights Reserved.
    </span>
    
</footer>

  </div>;
};

export default Footer;
