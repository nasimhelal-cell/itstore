import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex ">
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
