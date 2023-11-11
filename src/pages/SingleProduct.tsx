import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../features/products/productsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/reduxHooks";
import { formatPrice } from "../utils/formatPrice";
import AddToCart from "../ui/AddToCart";

const SingleProduct = () => {
  const navigate = useNavigate();

  const { prodId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(prodId));
  }, [dispatch, prodId]);
  const singleProduct = useAppSelector((store) => store.product.singleProduct);
  if (!singleProduct) {
    // loading content
    return (
      <section className="section-center">
        <article className="py-20">
          <p>Loading...</p>
        </article>
      </section>
    );
  }
  return (
    <section className="section-center">
      <article className="py-20">
        <button
          onClick={() => navigate(-1)}
          className="block mb-[3rem] hover:underline text-text"
        >
          Go Back
        </button>
        {/* product info */}
        <div>
          <li className="flex  items-center">
            <div className="flex-1 mr-[7rem]">
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
              <h2 className="text-[2.5rem] font-semibold mb-7">
                {singleProduct.new && (
                  <strong className="text-orange-brown block text-[1rem] uppercase tracking-[.5em] font-normal">
                    New Product
                  </strong>
                )}
                {singleProduct.new && <br />}
                <span className="max-w-[350px] mx-auto lg:mx-0 block break-words">
                  {singleProduct.name}
                </span>
              </h2>
              <p className="text-text mb-7 leading-6">
                {singleProduct.description}
              </p>
              <p className="text-black font-medium tracking-wider mb-7">
                {formatPrice(singleProduct.price)}
              </p>
              <AddToCart />
            </div>
          </li>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
