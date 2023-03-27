import bill from "../assets/bill.png";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";

const ControlBilling = () => {
  return (
    <figure className="py-10 sm:flex sm:gap-2 sm:items-center md:justify-between">
      <header
        data-aos="fade-left"
        data-aos-duration="1000"
        className="pb-6 sm:w-72 md:w-80 lg:w-[28rem] sm:flex-row sm:order-1"
      >
        <h1 className="text-white text-2xl lg:text-4xl pb-2">
          Easily control your billing & invoicing.
        </h1>
        <p className="text-dimWhite text-[0.9rem] pb-3">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <section className="flex gap-2">
          <figure>
            <img src={apple} alt="apple" className="max-w-full object-cover" />
          </figure>
          <figure>
            <img
              src={google}
              alt="google"
              className="max-w-full object-cover"
            />
          </figure>
        </section>
      </header>
      <figure
        data-aos="fade-right"
        data-aos-duration="1000"
        className="sm:w-96 lg:w-[38rem]"
      >
        <img src={bill} alt="bill" className="max-w-full object-cover" />
      </figure>
    </figure>
  );
};

export default ControlBilling;
