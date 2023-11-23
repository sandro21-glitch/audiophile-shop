import Products from "../features/home/Products";

type NavProps = {
  isOpen: boolean;
};

const MobileNavPop = ({ isOpen }: NavProps) => {
  return (
    <div
      className={`lg:hidden bg-white absolute w-full z-[999] top-full ${
        isOpen ? "translate-y-0" : "-translate-y-[200%]"
      } rounded-b-3xl transition-all ease-linear duration-300 px-5`}
    >
      <Products />
    </div>
  );
};

export default MobileNavPop;
