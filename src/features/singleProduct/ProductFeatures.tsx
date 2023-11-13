import { Product } from "../products/productsSlice";

const ProductFeatures = ({ singleProduct }: { singleProduct: Product }) => {
  return (
    <>
      <div className="flex-1 mr-[0] mb-20 lg:mr-[7rem]">
        <h3 className="uppercase text-black font-medium tracking-wider">
          features
        </h3>
        <p className="text-text leading-5">{singleProduct.features}</p>
      </div>
      <div className="flex-1 ">
        <h3 className="uppercase text-black font-medium tracking-wider">
          IN THE BOX
        </h3>
        {singleProduct.includedItems.map((item) => {
          return (
            <div className="grid grid-cols">
              <span className="text-orange-brown font-medium">
                {item.quantity}x
              </span>
              <span>{item.item}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductFeatures;
