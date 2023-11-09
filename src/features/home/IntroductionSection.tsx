import gear from "/assets/image-best-gear.jpg";
import gearMob from "/assets/image-best-gear-mobile.jpg";
const IntroductionSection = () => {
  return (
    <div className="flex items-center lg:flex-row flex-col-reverse">
      {/* left */}
      <div className="flex-1 ">
        <h2 className="font-medium mb-5">
          BRINGING YOU THE <span className="text-orange-brown">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="text-text text-[.9rem] leading-[1.7rem] max-w-[90%]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      {/* right */}
      <div className="flex-1 mb-5 lg:mb-0">
        <img
          src={gearMob}
          alt="gear"
          className="w-full h-auto rounded-lg object-cover block lg:hidden"
        />
        <img
          src={gear}
          alt="gear"
          className="w-full h-auto rounded-lg object-cover hidden lg:block"
        />
      </div>
    </div>
  );
};

export default IntroductionSection;
