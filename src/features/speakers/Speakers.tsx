import { useAppSelector } from "../../hooks/reduxHooks";
import PageHeader from "../../ui/PageHeader";
import SingleHeadphone from "../../ui/SingleItem";
import IntroductionSection from "../home/IntroductionSection";
import Products from "../home/Products";

const Speakers = () => {
  const product = useAppSelector((store) => store.product.product);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <PageHeader title="Speakers" />
      <article className="section-center">
        <ul className=" flex flex-col gap-20 py-14">
          {product
            .filter((p) => p.category === "speakers")
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

export default Speakers;
