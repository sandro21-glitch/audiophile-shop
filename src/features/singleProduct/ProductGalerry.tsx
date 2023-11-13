import { Product } from "../products/productsSlice";

const ProductGalerry = ({ singleProduct }: { singleProduct: Product }) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="col-span-1">
        <img
          className="w-full"
          src={singleProduct.gallery.first.desktop}
          alt=""
        />
        <img
          className="w-full mt-5"
          src={singleProduct.gallery.second.desktop}
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full h-full"
          src={singleProduct.gallery.third.desktop}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductGalerry;
