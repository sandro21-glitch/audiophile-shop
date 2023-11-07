import SeeProductBtn from "../../../ui/SeeProductBtn";

const SpeakerZx7ProductCard = () => {
  return (
    <li className="bg-zx7Tablet lg:bg-zx7 md:bg-cover bg-center mt-[2rem] bg-cover bg-no-repeat rounded-xl lg:mt-[2.5rem] w-full h-fit object-cover">
      <div className="w-full p-10 md:p-20 lg:p-32">
        <h2 className="mb-7 text-[2rem] text-black font-semibold">
          ZX7 SPEAKER
        </h2>
        <SeeProductBtn color="black" />
      </div>
    </li>
  );
};

export default SpeakerZx7ProductCard;
