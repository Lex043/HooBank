import { useEffect, useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import HandleMoney from "./components/HandleMoney";
import ControlBilling from "./components/ControlBilling";
import BetterCard from "./components/BetterCard";
import Review from "./components/Review";
import Comments from "./components/Comments";
import Partners from "./components/Partners";
import TryService from "./components/TryService";
import Footer from "./components/Footer";
import FooterLink from "./components/FooterLink";
import scroll from "./components/animations/Scroll";

scroll();

const App = () => {
  const [preloader, setPreloader] = useState(true);

  const [timer, setTimer] = useState(4);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <div className="flex flex-col items-center justify-center bg-black fixed top-0 right-0 bottom-0 left-0 z-10">
          <h1 className="text-3xl text-white">HOOBANK</h1>
        </div>
      ) : (
        <main className="bg-primary h-full px-6 md:px-[4rem] font-poppins">
          <Navbar />
          <Header />
          <Stats />
          <HandleMoney />
          <ControlBilling />
          <BetterCard />
          <Review />
          <Comments />
          <Partners />
          <TryService />
          <Footer />
          <FooterLink />
        </main>
      )}
    </>
  );
};

export default App;
