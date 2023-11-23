import Products from "../features/home/Products";

type NavProps = {
  isOpen: boolean;
};

const MobileNavPop = ({ isOpen }: NavProps) => {
  return (
    <div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden fixed left-0 top-0 right-0 bg-black opacity-60
         w-screen h-screen transition-all ease-in-out delay-500 duration-300`}
      ></div>
      <div
        className={`lg:hidden bg-white absolute w-full z-[9999] top-full ${
          isOpen ? "translate-y-0" : "-translate-y-[200%]"
        } rounded-b-3xl transition-all ease-linear duration-300 px-5`}
      >
        <Products />
      </div>
    </div>
  );
};

export default MobileNavPop;
