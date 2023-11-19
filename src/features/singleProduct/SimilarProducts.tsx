import { useAppSelector } from "../../hooks/reduxHooks";
import SeeProductBtn from "../../ui/SeeProductBtn";

const SimilarProducts = () => {
  const product = useAppSelector((store) => store.product.product);
  return (
    <div className="flex gap-7 ">
      {product.slice(0, 3).map((singleProduct) => {
        return (
          <div key={singleProduct.id}>
            <div className="bg-color-gray flex-1 rounded-md p-4">
              <img src={singleProduct.image.desktop} alt="" />
            </div>
            <div className="text-center">
              <h4 className="text-center my-5 font-medium">
                {singleProduct.name}
              </h4>
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
