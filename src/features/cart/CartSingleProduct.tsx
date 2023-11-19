import { CartTypes } from "./cartSlice";

const CartSingleProduct = ({ cartItem }: CartTypes) => {
  const { name, cartImage, price, id, amount } = cartItem;

  return (
    <div className="flex items-center gap-2" key={id}>
      <img src={cartImage} alt={name} className="rounded-md w-20 h-20" />
      <div>
        <p>{amount}</p>
        <p className="text-black text-[1rem]">{name}</p>
        <p className="font-medium text-text text-[.9rem]">${price}</p>
      </div>
    </div>
  );
};

export default CartSingleProduct;
