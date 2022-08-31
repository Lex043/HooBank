import pay from "../assets/card.png";
import GetStartedBtn from "./GetStartedBtn";

const BetterCard = () => {
  return (
    <figure className="pt-5 sm:flex sm:items-center sm:gap-3 md:justify-between">
      <header className="md:w-96 lg:w-[30rem]">
        <h1 className="text-white text-2xl lg:text-4xl pb-3">
          Find a better card deal in few easy steps.
        </h1>
        <p className="text-dimWhite lg:text-[0.9rem] pb-3">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <GetStartedBtn />
      </header>

      <div>
        <img
          src={pay}
          alt="pay"
          className="max-w-full object-cover sm:w-96 lg:w-[34rem]"
        />
      </div>
    </figure>
  );
};

export default BetterCard;
