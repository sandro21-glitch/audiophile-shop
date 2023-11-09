import Button from "./SeeProductBtn";
import { Product } from "../features/products/productsSlice";
interface SingleHeadphoneProps {
  singleProduct: Product;
  index: number;
}

const SingleHeadphone = ({ singleProduct, index  }: SingleHeadphoneProps) => {
  console.log(singleProduct)
  return (
    <li className={`flex items-center ${index == 1 ? "flex-row-reverse" : ""}`}>
      <div className={`flex-1 ${index == 1 ? "ml-[7rem]" : "mr-[7rem]"}`}>
        <img
          src={singleProduct.image.mobile}
          alt={singleProduct.name}
          className="block md:hidden"
        />
        <img
          src={singleProduct.image.tablet}
          alt={singleProduct.name}
          className="hidden md:block lg:hidden"
        />
        <img
          src={singleProduct.image.desktop}
          alt={singleProduct.name}
          className="hidden lg:block"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-[2rem] font-medium mb-7">
          {singleProduct.new ? (
            <strong className="text-orange-brown block text-[1rem] uppercase tracking-[.5em] font-normal">
              New Product
            </strong>
          ) : (
            ""
          )}
          {singleProduct.new && <br />}
          <span className="max-w-[250px] block break-words">
            {singleProduct.name}
          </span>
        </h2>
        <p className="text-text mb-7 leading-6">{singleProduct.description}</p>
        <Button
          bgClass="bg-[#d87d4a]"
          text="white"
          hoverClass="hover:bg-[#fbaf85]"
        >
          See product
        </Button>
      </div>
    </li>
  );
};

export default SingleHeadphone;
