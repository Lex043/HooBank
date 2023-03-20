import airbnb from "../assets/airbnb.png";
import binance from "../assets/binance.png";
import coinbase from "../assets/coinbase.png";
import dropbox from "../assets/dropbox.png";

const Partners = () => {
  return (
    <figure className="flex flex-wrap gap-4 py-9 md:justify-between">
      <img src={airbnb} alt="airbnb" className="partners-style" />
      <img src={binance} alt="binance" className="partners-style" />
      <img
        src={coinbase}
        alt="coinbase"
        className="max-w-[40%] sm:w-24 object-contain"
      />
      <img src={dropbox} alt="dropbox" className="partners-style" />
    </figure>
  );
};

export default Partners;
