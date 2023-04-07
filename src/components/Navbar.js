import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-400 py-5 text-gray-50">
      <nav className="flex container mx-auto">
        <div>
          <Link to="/">ITB</Link>
        </div>
        <ul className="list-none flex justify-center ml-auto gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
