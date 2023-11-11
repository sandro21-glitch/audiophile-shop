import Button from "./SeeProductBtn";
import { Product } from "../features/products/productsSlice";

interface SingleHeadphoneProps {
  singleProduct: Product;
  index: number;
}

const SingleHeadphone = ({ singleProduct, index }: SingleHeadphoneProps) => {
  return (
    <li
      className={`flex items-center ${
        index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col`}
    >
      <div
        className={`flex-1 ${
          index === 1 ? "lg:ml-[7rem]" : "lg:mr-[7rem]"
        } w-full mb-7`}
      >
        <img
          src={singleProduct.image.mobile}
          alt={singleProduct.name}
          className="block md:hidden w-full h-full object-cover"
        />
        <img
          src={singleProduct.categoryImage.tablet}
          alt={singleProduct.name}
          className="hidden md:block lg:hidden h-full object-cover"
        />
        <img
          src={singleProduct.categoryImage.desktop}
          alt={singleProduct.name}
          className="hidden lg:block h-full object-cover"
        />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-[2rem] font-medium mb-7">
          {singleProduct.new && (
            <strong className="text-orange-brown block text-[1rem] uppercase tracking-[.5em] font-normal">
              New Product
            </strong>
          )}
          {singleProduct.new && <br />}
          <span className="max-w-[250px] mx-auto lg:mx-0 block break-words">
            {singleProduct.name}
          </span>
        </h2>
        <p className="text-text mb-7 leading-6">{singleProduct.description}</p>
        <Button
          bgClass="bg-[#d87d4a]"
          text="white"
          hoverClass="hover:bg-[#fbaf85]"
          prodId={singleProduct.id}
        >
          See product
        </Button>
      </div>
    </li>
  );
};

export default SingleHeadphone;
