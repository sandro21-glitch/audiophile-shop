import SpeakerProductCard from "./cards/SpeakerProductCard";
import SpeakerZx7ProductCard from "./cards/SpeakerZx7ProductCard";
import EarphonesProductCart from "./cards/EarphonesProductCart";
const SingleProductLink = () => {
  return (
    <div className="mt-28 mb-20">
      <ul className="w-full">
        <SpeakerProductCard />
        <SpeakerZx7ProductCard />
        <EarphonesProductCart />
      </ul>
    </div>
  );
};

export default SingleProductLink;
