import { formatPrice } from "../../utils/formatPrice";
import { CartTypes } from "../cart/cartSlice";
interface SingleOrderProductProps {
  product: CartTypes;
}

const SingleOrderProduct = ({ product }: SingleOrderProductProps) => {
  if (!product) {
    return null; // or handle the case where product is undefined
  }
  return (
    <div className="flex gap-1">
      <img
        src={product.cartImage}
        alt={product.shortName}
        className="w-[3rem] h-[3rem]"
      />
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-black font-semibold">{product.shortName}</p>
          <p className="text-text font-semibold">x{product.amount}</p>
        </div>
        <p className="text-text font-medium text-[.9rem]">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default SingleOrderProduct;
