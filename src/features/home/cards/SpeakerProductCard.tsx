import SeeProductBtn from "../../../ui/SeeProductBtn";
import speaker from "/assets/image-speaker-zx9.png";

const SpeakerProductCard = () => {
  return (
    <li
      className="bg-orange-brown bg-circles-center lg:bg-top-left-15 lg:bg-top-left-15
       pb-0 pt-20 overflow-hidden bg-no-repeat rounded-lg"
      style={{
        backgroundImage: 'url("/assets/pattern-circles.svg")',
        // backgroundPosition: "-15rem -9.125rem",
      }}
    >
      <div className="flex flex-col lg:flex-row">
        <img
          src={speaker}
          alt="speaker"
          className="w-[12.3125rem] h-auto lg:w-[25.625rem] ml-[7rem] object-cover relative top-[0.8rem]"
        />
        <div className="text-center lg:text-left ml-0 lg:ml-36 mt-[2rem] ">
          <h2 className="mb-7 text-[4rem] text-white font-semibold">
            ZX9 <br /> SPEAKER
          </h2>
          <p className="mb-7 max-w-[20rem] mx-auto font-thin text-[.9rem]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <SeeProductBtn color="black" />
        </div>
      </div>
    </li>
  );
};

export default SpeakerProductCard;
