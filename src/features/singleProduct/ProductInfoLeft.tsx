type ProdInfoTyps = {
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
};

const ProductInfoLeft = ({ image, name }: ProdInfoTyps) => {
  return (
    <div className="mr-[2rem] lg:mr-[7rem]">
      <img
        src={image.tablet}
        alt={name}
        className="block md:hidden w-full h-full object-cover rounded-lg"
      />
      <img
        src={image.tablet}
        alt={name}
        className="hidden md:block lg:hidden h-full object-cover rounded-lg"
      />
      <img
        src={image.desktop}
        alt={name}
        className="hidden lg:block h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default ProductInfoLeft;
