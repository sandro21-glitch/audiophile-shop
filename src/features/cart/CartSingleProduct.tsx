import { formatPrice } from "../../utils/formatPrice";
import CartCounter from "./CartCounter";
import { CartTypes } from "./cartSlice";

const CartSingleProduct = ({ cartItem }: { cartItem: CartTypes }) => {
  const { shortName, cartImage, price } = cartItem;

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={cartImage} alt={shortName} className="rounded-md w-16 h-16" />
        <div>
          {/* <p>{amount}</p> */}
          <p className="text-black text-[1rem] font-medium">{shortName}</p>
          <p className=" text-text text-[.9rem] font-medium">
            {formatPrice(price)}
          </p>
        </div>
      </div>
      {/* single product counter */}
      <CartCounter />
    </div>
  );
};

export default CartSingleProduct;
