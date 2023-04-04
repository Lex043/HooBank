import quotes from "../assets/quotes.svg";
import people1 from "../assets/people01.png";
import people2 from "../assets/people02.png";
import people3 from "../assets/people03.png";

const Comments = () => {
  return (
    <section className="py-6 flex flex-wrap gap-3 lg:flex-nowrap md:justify-between">
      <div className="py-2 px-4 hover:bg-sha rounded-md sm:w-72 md:w-56 lg:w-[19rem]">
        <figure className="pt-5">
          <img
            src={quotes}
            alt="quotes"
            className="max-w-[30px] object-cover"
          />
        </figure>

        <p className="text-white text-[1rem] py-8 ">
          Money is only a tool. It will take you wherever you wish, but it will
          not replace you as the driver.
        </p>
        <figure className="flex gap-2 items-center pb-3">
          <img
            src={people1}
            alt=""
            className="max-w-[30px] lg:max-w-[40px] object-cover"
          />
          <header>
            <h1 className="text-[0.9rem] text-white">Herman Jensen</h1>
            <p className="text-[0.8rem] text-dimWhite">Founder & Leader</p>
          </header>
        </figure>
      </div>

      <div className="py-2 px-4 hover:bg-sha rounded-md sm:w-72 md:w-56 lg:w-[19rem]">
        <figure className="pt-5">
          <img
            src={quotes}
            alt="quotes"
            className="max-w-[30px] object-cover"
          />
        </figure>

        <p className="text-white text-[1rem] py-8 ">
          Money makes your life easier. If you're lucky to have it, you're
          lucky.
        </p>
        <figure className="flex gap-2 items-center pb-3">
          <img
            src={people2}
            alt=""
            className="max-w-[30px] lg:max-w-[40px] object-cover"
          />
          <header>
            <h1 className="text-[0.9rem] text-white">Steve Mark</h1>
            <p className="text-[0.8rem] text-dimWhite">Founder & Leader</p>
          </header>
        </figure>
      </div>

      <div className="py-2 px-4 hover:bg-sha rounded-md sm:w-72 md:w-56 lg:w-[19rem]">
        <figure className="pt-5">
          <img
            src={quotes}
            alt="quotes"
            className="max-w-[30px] object-cover"
          />
        </figure>

        <p className="text-white text-[1rem] py-8 ">
          It is usually people in the money business, finance, and international
          trade that are really rich.
        </p>
        <figure className="flex gap-2 items-center pb-3">
          <img
            src={people3}
            alt=""
            className="max-w-[30px] lg:max-w-[40px] object-cover"
          />
          <header>
            <h1 className="text-[0.9rem] text-white">Kenn Gallagher</h1>
            <p className="text-[0.8rem] text-dimWhite">Founder & Leader</p>
          </header>
        </figure>
      </div>
    </section>
  );
};

export default Comments;
