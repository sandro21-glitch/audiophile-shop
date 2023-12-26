import HeroPage from "../features/home/HeroPage";
import IntroductionSection from "../features/home/IntroductionSection";
import Products from "../features/home/Products";
import SingleProductLink from "../features/home/SingleProductLink";

const Home = () => {
  return (
    <main>
      <HeroPage />
      <div className="section-center">
        <Products />
        <SingleProductLink />
        <IntroductionSection />
      </div>
    </main>
  );
};

export default Home;
