import { formatPrice } from "../../../utils/formatPrice";

type SumProduct = {
  product: {
    id: number;
    shortName: string;
    cartImage: string;
    price: number;
    amount: number;
  };
};
const SumProduct = ({ product }: SumProduct) => {
  return (
    <li className="flex items-center gap-5 mb-5">
      <img
        src={product.cartImage}
        alt={product.shortName}
        className="w-[4rem] h-[4rem] rounded-lg"
      />
      <div className="w-full">
        <div className="w-full flex items-start justify-between">
          <p className="text-black font-medium">{product.shortName}</p>
          <p className="text-text font-medium">{product.amount}</p>
        </div>
        <p className="text-text font-medium">{formatPrice(product.price)}</p>
      </div>
    </li>
  );
};

export default SumProduct;
