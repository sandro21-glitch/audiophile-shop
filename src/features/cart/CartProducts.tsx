const CartProducts = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <img
          src="https://audiophile-ecommerce-mbart13.vercel.app/_next/image?url=%2Fimages%2Fcart%2Fimage-xx59-headphones.jpg&w=64&q=75"
          alt=""
          className="rounded-md"
        />
        <div>
          <p className=" text-black text-[1rem]">XX59</p>
          <p className="font-medium text-text text-[.9rem]">$ 899</p>
        </div>
      </div>
      {/* here counter */}
    </div>
  );
};

export default CartProducts;
