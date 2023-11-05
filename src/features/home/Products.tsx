import { Link } from "react-router-dom";
import headphones from "/assets/image-headphones.png";
import speakers from "/assets/image-speakers.png";
import earphones from "/assets/image-earphones.png";
import arrowRight from "/assets/icon-arrow-right.svg";
const Products = () => {
  return (
    <ul className="mt-28 flex items-center justify-between gap-7">
      <li className="group pt-[5.5rem] pb-[1.5rem] cursor-pointer relative flex-1 bg-color-gray rounded-lg flex flex-col justify-center items-center">
        <Link to="/headphones">
          <img
            src={headphones}
            alt="headphones"
            className="w-[8.625rem] h-auto absolute -top-10 left-0 right-0 mx-auto"
          />
        </Link>
        <h4 className="uppercase font-medium tracking-wider text-[1rem] lg:text-[1.2rem]">headphones</h4>
        <div className="flex items-center gap-3">
          <p className="uppercase group-hover:text-orange-brown transition-colors ease-in duration-150 text-text font-medium text-[0.8125rem]">
            shop
          </p>
          <img src={arrowRight} alt="arrow right" />
        </div>
      </li>
      <li className="group pt-[5.5rem] pb-[1.5rem] cursor-pointer relative flex-1 bg-color-gray rounded-lg flex flex-col justify-center items-center">
        <Link to="/headphones">
          <img
            src={speakers}
            alt="speakers"
            className="w-[8.625rem] h-auto absolute -top-10 left-0 right-0 mx-auto"
          />
        </Link>
        <h4 className="uppercase font-medium tracking-wider text-[1rem] lg:text-[1.2rem]">headphones</h4>
        <div className="flex items-center gap-3">
          <p className="uppercase group-hover:text-orange-brown transition-colors ease-in duration-150 text-text font-medium text-[0.8125rem]">
            shop
          </p>
          <img src={arrowRight} alt="arrow right" />
        </div>
      </li>
      <li className="group pt-[5.5rem] pb-[1.5rem] cursor-pointer relative flex-1 bg-color-gray rounded-lg flex flex-col justify-center items-center">
        <Link to="/headphones">
          <img
            src={earphones}
            alt="earphones"
            className="w-[8.625rem] h-auto absolute -top-10 left-0 right-0 mx-auto"
          />
        </Link>
        <h4 className="uppercase font-medium tracking-wider text-[1rem] lg:text-[1.2rem]">headphones</h4>
        <div className="flex items-center gap-3">
          <p className="uppercase group-hover:text-orange-brown transition-colors ease-in duration-150 text-text font-medium text-[0.8125rem]">
            shop
          </p>
          <img src={arrowRight} alt="arrow right" />
        </div>
      </li>
    </ul>
  );
};

export default Products;
