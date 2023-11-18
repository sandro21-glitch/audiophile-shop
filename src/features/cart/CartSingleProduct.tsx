import { CartTypes } from "./cartSlice";

const CartSingleProduct = ({ cartItem }: CartTypes) => {
  const { name, image, price, id, amount } = cartItem;

  return (
    <div className="flex items-center gap-2" key={id}>
      <img src={image.mobile} alt={name} className="rounded-md" />
      <div>
        <p>{amount}</p>
        <p className="text-black text-[1rem]">{name}</p>
        <p className="font-medium text-text text-[.9rem]">${price}</p>
      </div>
    </div>
  );
};

export default CartSingleProduct;
