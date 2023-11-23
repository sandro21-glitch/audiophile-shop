import { useAppSelector } from "../../hooks/reduxHooks";
import SeeProductBtn from "../../ui/SeeProductBtn";

const SimilarProducts = () => {
  const product = useAppSelector((store) => store.product.product);
  return (
    <div className="flex flex-col md:flex-row gap-7 mb-[10rem]">
      {product.slice(0, 3).map((singleProduct) => {
        return (
          <div key={singleProduct.id}>
            <div className="bg-color-gray flex-1 rounded-md p-4">
              <img
                src={singleProduct.image.mobile}
                alt=""
                className="block md:hidden lg:hidden"
              />
              <img
                src={singleProduct.image.tablet}
                alt=""
                className="hidden md:block lg:hidden"
              />
              <img
                src={singleProduct.image.desktop}
                alt=""
                className="hidden lg:block"
              />
            </div>
            <div className="text-center">
              <h3 className="text-center my-5 font-medium">
                {singleProduct.shortName}
              </h3>
              <SeeProductBtn
                bgClass="bg-orange-brown"
                hoverClass="hover:bg-orange-brown-light"
                text="white"
                prodId={singleProduct.id}
              >
                see product
              </SeeProductBtn>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SimilarProducts;
