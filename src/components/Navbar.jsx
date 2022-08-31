import { useRef } from "react";

import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.remove("translate-y-[-100vh]");
  };

  return (
    <section className="flex items-center justify-between py-3">
      <img src={logo} alt={logo} className="max-w-full w-28" />

      <nav
        ref={navRef}
        className="text-dimWhite translate-y-[-100vh] sm:translate-y-[0vh] transition-all  sm:text-xs lg:text-[1rem] sm:relative fixed top-0 left-0 sm:h-0 h-full w-full flex sm:flex-row flex-col items-center justify-center sm:justify-end gap-3 bg-primary"
      >
        <a className="mx-2 hover:text-white" href="#">
          Home
        </a>
        <a className="mx-2 hover:text-white" href="#">
          About Us
        </a>
        <a className="mx-2 hover:text-white" href="#">
          Features
        </a>
        <a className="mx-2 hover:text-white" href="#">
          Solution
        </a>
        <button
          onClick={showNavbar}
          className="opacity-1 sm:opacity-0 sm:hidden pointer absolute top-[1.5rem] right-[2rem]"
        >
          <img src={close} alt="close" />
        </button>
      </nav>

      <button onClick={showNavbar} className="opacity-1 sm:opacity-0 sm:hidden">
        <img src={menu} alt="menu" />
      </button>
    </section>
  );
};

export default Navbar;
