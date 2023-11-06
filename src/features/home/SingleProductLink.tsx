import SeeProductBtn from "../../ui/SeeProductBtn";
import speaker from "/assets/image-speaker-zx9.png";
// import circles from "/assets/pattern-circles.svg";
const SingleProductLink = () => {
  return (
    <div className="mt-28 mb-20">
      <ul>
        <li
          className="bg-orange-brown pb-0 pt-20 overflow-hidden bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage: 'url("/assets/pattern-circles.svg")',
            backgroundPosition: "-15rem -9.125rem",
          }}
        >
          <div className="flex">
            <img
              src={speaker}
              alt=""
              className="w-[25.625rem] ml-[7rem] relative top-[0.8rem]"
            />
            <div className="text-left ml-36 mt-[2rem]">
              <h2 className="mb-7 text-[4rem] text-white font-semibold">
                ZX9 <br /> SPEAKER
              </h2>
              <p className="mb-7 max-w-[20rem] font-thin text-[.9rem]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <SeeProductBtn color="black" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SingleProductLink;
