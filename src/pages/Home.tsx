import HeroPage from "../features/home/HeroPage";
import IntroductionSection from "../features/home/IntroductionSection";
import Products from "../features/home/Products";
import SingleProductLink from "../features/home/SingleProductLink";

const Home = () => {
  return (
    <section>
      <HeroPage />
      <div className="section-center px-5">
        <Products />
        <SingleProductLink />
        <IntroductionSection />
      </div>
    </section>
  );
};

export default Home;
