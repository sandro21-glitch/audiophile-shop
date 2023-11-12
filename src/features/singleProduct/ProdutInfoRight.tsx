import AddToCart from "../../ui/AddToCart";
import { formatPrice } from "../../utils/formatPrice";
import { Product } from "../products/productsSlice";

const ProdutInfoRight = ({ singleProduct }: { singleProduct: Product }) => {
  return (
    <div className="flex-1 text-left lg:text-left">
      <h2 className="text-[2.5rem] font-semibold mb-7">
        {singleProduct.new && (
          <strong className="text-orange-brown block text-[1rem] uppercase tracking-[.5em] font-normal">
            New Product
          </strong>
        )}
        {singleProduct.new && <br />}
        <span className="max-w-[350px] text-[1.5rem] md:text-[1.7rem] lg:text-[2rem] lg:mx-0 block break-words">
          {singleProduct.name}
        </span>
      </h2>
      <p className="text-text mb-7 leading-6">{singleProduct.description}</p>
      <p className="text-black font-medium tracking-wider mb-7">
        {formatPrice(singleProduct.price)}
      </p>
      <AddToCart />
    </div>
  );
};

export default ProdutInfoRight;
