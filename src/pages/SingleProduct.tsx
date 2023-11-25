import { useParams } from "react-router-dom";
import { getSingleProduct } from "../features/products/productsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/reduxHooks";

import ProductInfoLeft from "../features/singleProduct/ProductInfoLeft";
import ProdutInfoRight from "../features/singleProduct/ProdutInfoRight";
import ProductGalerry from "../features/singleProduct/ProductGalerry";
import ProductFeatures from "../features/singleProduct/ProductFeatures";
import Products from "../features/home/Products";
import IntroductionSection from "../features/home/IntroductionSection";
import SimilarProducts from "../features/singleProduct/SimilarProducts";
import BackBtn from "../ui/BackBtn";

const SingleProduct = () => {
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
        <BackBtn />
        {/* product info */}
        <ul className="flex flex-col">
          <li className="flex  items-center mb-[10rem]">
            <ProductInfoLeft
              image={singleProduct.image}
              name={singleProduct.name}
            />
            <ProdutInfoRight singleProduct={singleProduct} />
          </li>
          <li className="flex flex-col lg:flex-row mb-20 lg:mb-0">
            {/* product features */}
            <ProductFeatures singleProduct={singleProduct} />
          </li>
        </ul>
        <ProductGalerry singleProduct={singleProduct} />
        <SimilarProducts />
        <Products />
        <IntroductionSection />
      </article>
    </section>
  );
};

export default SingleProduct;
