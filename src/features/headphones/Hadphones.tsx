import { useAppSelector } from "../../hooks/reduxHooks";
import PageHeader from "../../ui/PageHeader";

const Hadphones = () => {
  const headphones = useAppSelector((store) => store.product.product);

  console.log(headphones.filter((p) => p.category));
  return (
    <section>
      <PageHeader title="headphones" />
    </section>
  );
};

export default Hadphones;
