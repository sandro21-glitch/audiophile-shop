import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import cart from "/assets/icon-cart.svg";
import { setOpenCart } from "../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import CartItemCountPopup from "./CartItemCountPopup";
import MobileNav from "./MobileNav";
import MobileNavPop from "./MobileNavPop";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState(false);
  const openCart = useAppSelector((store) => store.cart.openCart);
  useEffect(() => {
    if (openCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openCart]);
  return (
    <header className="w-full bg-primary-color py-10 relative after:absolute after:w-[72.375rem] after:mx-auto after:left-0 after:right-0 after:h-[1px] after:bg-divider after:bottom-0 ">
      <MobileNavPop isOpen={isOpen} setOpen={setOpen} />
      <nav className="section-center text-text-white ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 static z-[9999]">
            <MobileNav isOpen={isOpen} setOpen={setOpen} />
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
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
          <div className="relative z-[9999]">
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
