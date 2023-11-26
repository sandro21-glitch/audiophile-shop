import SumProduct from "./summary/SumProduct";

const Summary = () => {
  return (
    <section className="bg-white flex-1 p-10">
      <h2 className="uppercase text-[1.3rem] font-medium tracking-wider mb-5">
        Summary
      </h2>
      <SumProduct />
      <div className="flex justify-between">
        <dt className="uppercase text-text">TOTAL</dt>
        <dd className="font-semibold">$ 5,099</dd>
      </div>
      <div className="flex justify-between">
        <dt className="uppercase text-text">shipping</dt>
        <dd className="font-semibold">$ 50</dd>
      </div>
      <div className="flex justify-between">
        <dt className="uppercase text-text">VAT (INCLUDED)</dt>
        <dd className="font-semibold">$ 1,019.8</dd>
      </div>
      <div className="flex justify-between">
        <dt className="uppercase text-text">GRAND TOTAL</dt>
        <dd className="font-semibold">$ 6,168.8</dd>
      </div>
    </section>
  );
};

export default Summary;
