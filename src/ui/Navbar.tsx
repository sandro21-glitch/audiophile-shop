import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import cart from "/assets/icon-cart.svg";
import { setOpenCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import CartItemCountPopup from "./CartItemCountPopup";
import MobileNav from "./MobileNav";
import MobileNavPop from "./MobileNavPop";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full bg-primary-color py-10 relative after:absolute after:w-[72.375rem] after:mx-auto after:left-0 after:right-0 after:h-[1px] after:bg-divider after:bottom-0 ">
      <MobileNavPop  isOpen={isOpen} />
      <nav className="section-center text-text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <MobileNav isOpen={isOpen} setOpen={setOpen} />
            <button>
              <img src={logo} alt="logo" />
            </button>
          </div>
          <ul className="gap-8 font-medium hidden lg:flex-center">
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
          <div className="relative">
            <button onClick={() => dispatch(setOpenCart(true))}>
              <img src={cart} alt="cart" />
            </button>
            <CartItemCountPopup />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
