import SeeProductBtn from "../../ui/SeeProductBtn";
const HeroPage = () => {
  return (
    <article className="w-full bg-primary-color px-5">
      <div className="section-center relative overflow-hidden py-40 flex lg:block justify-center items-center">
        {/* left Side */}
        <div className="relative z-[2] text-center lg:text-left">
          <h6 className="uppercase text-textLight tracking-[.5rem] font-semibold mb-5">
            NEW PRODUCT
          </h6>
          <h1 className="uppercase text-text-white font-semibold tracking-widest leading-[3.5rem] mb-5">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-textLight max-w-[23rem] text-[0.9375rem] leading-6 mb-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <SeeProductBtn />
        </div>
        {/* right side */}
        <div
          className="
            after:absolute after:bg-heroImgMobile lg:after:bg-heroImg
            after:z-[1] after:right-0 lg:after:right-[-5rem]
            after:top-0 after:w-full after:h-full after:bg-no-repeat
            after:bg-contain after:bg-center"
        ></div>
      </div>
    </article>
  );
};

export default HeroPage;
