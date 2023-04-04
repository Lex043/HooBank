import GetStartedBtn from "./GetStartedBtn";
import star from "../assets/Star.svg";
import shield from "../assets/Shield.svg";
import send from "../assets/Send.svg";

const HandleMoney = () => {
  return (
    <section className="py-8 sm:flex md:justify-between sm:gap-3 sm:items-center">
      <div className="sm:w-96 md:w-80 lg:w-[30rem]">
        <h1 className="text-white font-normal text-2xl lg:text-4xl">
          You do the business, we'll handle the money.
        </h1>
        <p className="text-dimWhite text-[1rem] py-4">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <GetStartedBtn />
      </div>

      <div className="pt-7 md:w-96 lg:w-[auto] flex flex-col gap-4">
        <figure className="flex gap-3 hover:bg-sha py-2 pl-2 rounded-md">
          <img src={star} alt="Star" />
          <header>
            <h1 className="text-white pb-1 text-[1rem] lg:text-[1.5rem]">
              Rewards
            </h1>
            <p className="text-dimWhite text-[0.9rem]">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </header>
        </figure>

        <div className="flex gap-3 hover:bg-sha py-2 pl-2 rounded-md">
          <img src={shield} alt="Shield" />
          <header>
            <h1 className="text-white pb-1 text-[1rem] lg:text-[1.5rem]">
              100% Secured
            </h1>
            <p className="text-dimWhite text-[0.9rem]">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </header>
        </div>

        <figure className="flex gap-3 hover:bg-sha py-2 pl-2 rounded-md">
          <img src={send} alt="Send" />
          <header>
            <h1 className="text-white pb-1 text-[1rem] lg:text-[1.5rem]">
              Balance Transfer
            </h1>
            <p className="text-dimWhite text-[0.9rem]">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </header>
        </figure>
      </div>
    </section>
  );
};

export default HandleMoney;
