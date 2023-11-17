const CartHeader = () => {
  return (
    <header className="flex justify-between w-full mb-10">
      <h6 className="text-black mb-0 uppercase font-medium text-[1.1rem]">
        Cart <span>(1)</span>
      </h6>
      <button className="underline text-text text-[.9rem] hover:text-orange-brown transition-colors ease-in duration-150">
        Remove All
      </button>
    </header>
  );
};

export default CartHeader;
