import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../features/products/productsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/reduxHooks";

import ProductInfoLeft from "../features/singleProduct/ProductInfoLeft";
import ProdutInfoRight from "../features/singleProduct/ProdutInfoRight";

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
        <ul className="flex flex-col">
          <li className="flex  items-center mb-[10rem]">
            <ProductInfoLeft
              image={singleProduct.image}
              name={singleProduct.name}
            />
            <ProdutInfoRight singleProduct={singleProduct} />
          </li>
          <li className="flex flex-col lg:flex-row">
            {/* product features */}
            <div className="flex-1 mr-[0] mb-20 lg:mr-[7rem]">
              <h3 className="uppercase text-black font-medium tracking-wider">features</h3>
              <p className="text-text leading-5">{singleProduct.features}</p>
            </div>
            <div className="flex-1 ">
              <h3 className="uppercase text-black font-medium tracking-wider">IN THE BOX</h3>
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
          </li>
        </ul>
      </article>
    </section>
  );
};

export default SingleProduct;
