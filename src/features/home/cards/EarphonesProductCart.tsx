// import SeeProductBtn from "../../../ui/SeeProductBtn";
import earphones from "/assets/image-earphones-yx1.jpg";
import earphonesMobile from "/assets/image-earphones-yx1-mobile.jpg";

const EarphonesProductCart = () => {
  return (
    <li className=" mt-[2.5rem] flex gap-5 lg:gap-0">
      {/* left */}
      <div className="flex-1">
        <img
          src={earphones}
          alt="earphones"
          className="rounded-lg h-full object-cover lg:block hidden"
        />
        <img
          src={earphonesMobile}
          alt="earphones"
          className="rounded-lg h-full object-cover block lg:hidden"
        />
      </div>
      {/* right */}
      <div
        className="flex-1 rounded-lg overflow-hidden bg-color-gray
            flex justify-center items-start flex-col"
      >
        <div className="py-7 px-7">
          <h2 className=" ml-0 lg:ml-20 mb-7 text-[1.8rem] lg:text-[2rem] text-black font-medium">
            YX1 EARPHONES
          </h2>
          <button
            className={` px-8 py-3 text-white bg-black w-full lg:w-auto lg:ml-20 mb-5 lg:mb-0 font-semibold uppercase text-[.9rem] hover:opacity-80 transition-all ease-in duration-150`}
          >
            See Product
          </button>
        </div>
      </div>
    </li>
  );
};

export default EarphonesProductCart;
