import { useAppSelector } from "../../hooks/reduxHooks";
import PageHeader from "../../ui/PageHeader";
import IntroductionSection from "../home/IntroductionSection";
import Products from "../home/Products";
import SingleHeadphone from "../../ui/SingleItem";

const Headphones = () => {
  const product = useAppSelector((store) => store.product.product);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <PageHeader title="Headphones" />
      <article className="section-center">
        <ul className=" flex flex-col-reverse gap-20 py-14">
          {product
            .filter((p) => p.category === "headphones")
            .map((singleProduct, index) => (
              <SingleHeadphone
                key={index}
                singleProduct={singleProduct}
                index={index}
              />
            ))}
        </ul>
        <Products />
        <IntroductionSection />
      </article>
    </section>
  );
};

export default Headphones;
