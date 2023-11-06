import HeroPage from "../features/home/HeroPage";
import Products from "../features/home/Products";
import SingleProductLink from "../features/home/SingleProductLink";

const Home = () => {
  return (
    <section>
      <HeroPage />
      <div className="section-center mx-5">
        <Products />
        <SingleProductLink />
      </div>
    </section>
  );
};

export default Home;
