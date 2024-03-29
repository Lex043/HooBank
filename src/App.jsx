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
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    scroll();
  });

  return (
    <>
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
    </>
  );
};

export default App;
