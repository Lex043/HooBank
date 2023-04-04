import discount from "../assets/Discount.svg";
import robot from "../assets/robot.png";
import GetStarted from "./GetStarted";

const Header = () => {
  return (
    <header className="sm:flex sm:items-center md:gap-9 lg:justify-between mt-8">
      <section className="lg:w-[60rem]">
        <figure className="flex gap-1 items-center rounded-[10px] bg-dimBlue w-56 pl-2">
          <img src={discount} alt="" className="w-6" />
          <figcaption className="text-[#FFFFFF] text-[9px]">
            20% DISCOUNT FOR 1 MONTH ACCOUNT
          </figcaption>
        </figure>
        <section className="flex items-center sm:items-start sm:gap-4 lg:gap-0">
          <h1 className="text-white pt-3 text-4xl sm:font-bold pb-2 lg:leading-[4rem] lg:w-[28rem]">
            The Next <span className="text-secondary"> Generation </span>
            Payment Method.
          </h1>
          <div>
            <GetStarted />
          </div>
        </section>

        <p className=" text-dimWhite text-[1rem] lg:w-[29rem] pb-6">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </section>

      <figure className="lg:w-[50rem] max-w-full">
        <img src={robot} alt="robot" className="max-w-full object-cover" />
      </figure>
    </header>
  );
};

export default Header;
