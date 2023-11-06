type ButtonTypes = {
  color: string;
};

const SeeProductBtn = ({ color }: ButtonTypes) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={` px-8 py-3 text-white font-semibold uppercase text-[.9rem] hover:opacity-80 transition-all ease-in duration-150`}
    >
      See Product
    </button>
  );
};

export default SeeProductBtn;
