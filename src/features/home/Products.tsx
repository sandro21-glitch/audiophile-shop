import { Link } from "react-router-dom";
import headphones from "/assets/image-headphones.png";
import speakers from "/assets/image-speakers.png";
import earphones from "/assets/image-earphones.png";
import arrowRight from "/assets/icon-arrow-right.svg";
import { motion } from "framer-motion";
type ProductsProps = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
const Products = ({ setOpen }: ProductsProps) => {
  const handleItemClick = () => {
    if (setOpen) {
      setOpen(false);
    }
  };
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      className="my-20 lg:my-28 flex items-center justify-between gap-7"
    >
      <li
        onClick={handleItemClick}
        className="group pt-[5.5rem] pb-[1.5rem] cursor-pointer relative flex-1 bg-color-gray rounded-lg flex flex-col justify-center items-center"
      >
        <Link
          to="/headphones"
          className="flex flex-col justify-center items-center"
        >
          <img
            src={headphones}
            alt="headphones"
            className="w-[8.625rem] h-auto absolute -top-10 left-0 right-0 mx-auto"
          />
          <h4 className="uppercase font-medium tracking-wider text-[.8rem] md:text-[1rem] lg:text-[1.2rem]">
            headphones
          </h4>
          <div className="flex items-center gap-3">
            <p className="uppercase group-hover:text-orange-brown transition-colors ease-in duration-150 text-text font-medium text-[0.8125rem]">
              shop
            </p>
            <img src={arrowRight} alt="arrow right" />
          </div>
        </Link>
      </li>
      <li
        onClick={handleItemClick}
        className="group pt-[5.5rem] pb-[1.5rem] cursor-pointer relative flex-1 bg-color-gray rounded-lg flex flex-col justify-center items-center"
      >
        <Link
          to="/speakers"
          className="flex flex-col justify-center items-center"
        >
          <img
            src={speakers}
            alt="speakers"
            className="w-[8.625rem] h-auto absolute -top-10 left-0 right-0 mx-auto"
          />
          <h4 className="uppercase font-medium tracking-wider text-[.8rem] md:text-[1rem] lg:text-[1.2rem]">
            speakers
          </h4>
          <div className="flex items-center gap-3">
            <p className="uppercase group-hover:text-orange-brown transition-colors ease-in duration-150 text-text font-medium text-[0.8125rem]">
              shop
            </p>
            <img src={arrowRight} alt="arrow right" />
          </div>
        </Link>
      </li>
      <li
        onClick={handleItemClick}
        className="group pt-[5.5rem] pb-[1.5rem] cursor-pointer relative flex-1 bg-color-gray rounded-lg flex flex-col justify-center items-center"
      >
        <Link
          to="/earphones"
          className="flex flex-col justify-center items-center"
        >
          <img
            src={earphones}
            alt="earphones"
            className="w-[8.625rem] h-auto absolute -top-10 left-0 right-0 mx-auto"
          />
          <h4 className="uppercase font-medium tracking-wider text-[.8rem] md:text-[1rem] lg:text-[1.2rem]">
            earphones
          </h4>
          <div className="flex items-center gap-3">
            <p className="uppercase group-hover:text-orange-brown transition-colors ease-in duration-150 text-text font-medium text-[0.8125rem]">
              shop
            </p>
            <img src={arrowRight} alt="arrow right" />
          </div>
        </Link>
      </li>
    </motion.ul>
  );
};

export default Products;
