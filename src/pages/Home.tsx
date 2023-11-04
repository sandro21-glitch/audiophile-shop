import HeroPage from "../features/home/HeroPage";
import Products from "../features/home/Products";

const Home = () => {
  return (
    <section>
      <HeroPage />
      <div className="section-center">
        <Products />
      </div>
    </section>
  );
};

export default Home;
