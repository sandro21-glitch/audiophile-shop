import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import cart from "/assets/icon-cart.svg";
const Navbar = () => {
  return (
    <header className="w-full bg-primary-color py-10 px-5 relative after:absolute after:w-[72.375rem] after:mx-auto after:left-0 after:right-0 after:h-[1px] after:bg-divider after:bottom-0 ">
      <nav className="section-center text-text-white">
        <div className="flex justify-between">
          <button>
            <img src={logo} alt="logo" />
          </button>
          <ul className="flex-center gap-8 font-medium ">
            <li className="text-[0.875rem] hover:text-orange-brown transition-colors ease-in duration-150 tracking-wider">
              <Link to="/">HOME</Link>
            </li>
            <li className="text-[0.875rem] hover:text-orange-brown transition-colors ease-in duration-150 tracking-wider">
              <Link to="/headphones">HEADPHONES</Link>
            </li>
            <li className="text-[0.875rem] hover:text-orange-brown transition-colors ease-in duration-150 tracking-wider">
              <Link to="/speakers">SPEAKERS</Link>
            </li>
            <li className="text-[0.875rem] hover:text-orange-brown transition-colors ease-in duration-150 tracking-wider">
              <Link to="/earphones">EARPHONES</Link>
            </li>
          </ul>
          <button>
            <img src={cart} alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
