import { Product } from "../products/productsSlice";

const ProductGalerry = ({ singleProduct }: { singleProduct: Product }) => {
  return (
    <div className="grid grid-cols-2 gap-5 mb-20">
      <div className="col-span-1">
        <img
          className="w-full rounded-lg"
          src={singleProduct.gallery.first.desktop}
          alt=""
        />
        <img
          className="w-full mt-5 rounded-lg"
          src={singleProduct.gallery.second.desktop}
          alt=""
        />
      </div>
      <div className="col-span-1">
        <img
          className="w-full h-full rounded-lg"
          src={singleProduct.gallery.third.desktop}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductGalerry;
