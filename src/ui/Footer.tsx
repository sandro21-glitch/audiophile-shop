import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer
      className="bg-primary-color mt-36
     "
    >
      <nav className="section-center text-text-white py-20 px-5
       relative after:w-[6rem] after:h-1 after:bg-orange-brown after:absolute after:left-5 after:top-0">
        <div className="py-10 flex flex-col md:flex-row items-start justify-between lg:items-center">
          <button className="mb-5 lg:mb-0">
            <img src={logo} alt="logo" />
          </button>
          <ul className="flex items-center flex-wrap gap-5 font-medium ">
            <li className="text-[0.875rem] hover:text-orange-brown transition-colors ease-in duration-150 tracking-wider">
              <Link to="/">HOME</Link>
            </li>
            <li className="text-[0.875rem] hover:text-orange-brown transition-colors ease-in duration-150 tracking-wider">
              <Link to="/">HEADPHONES</Link>
            </li>
            <li className="text-[0.875rem] hover:text-orange-brown transition-colors ease-in duration-150 tracking-wider">
              <Link to="/">SPEAKERS</Link>
            </li>
            <li className="text-[0.875rem] hover:text-orange-brown transition-colors ease-in duration-150 tracking-wider">
              <Link to="/">EARPHONES</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center  mt-10">
          <p className=" lg:max-w-[50%] text-[.9rem] text-textLight mb-5 lg:mb-0">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          {/* social */}
          <ul className="flex items-center gap-2 ">
            <li className="text-3xl hover:text-orange-brown transition-colors ease-in duration-150 cursor-pointer">
              <AiFillFacebook />
            </li>
            <li className="text-3xl hover:text-orange-brown transition-colors ease-in duration-150 cursor-pointer">
              <AiOutlineTwitter />
            </li>
            <li className="text-3xl hover:text-orange-brown transition-colors ease-in duration-150 cursor-pointer">
              <AiOutlineInstagram />
            </li>
          </ul>
        </div>
        <p className="py-10 text-textLight text-[.9rem] text-center lg:text-left">
          Copyright 2021. All Rights Reserved
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
