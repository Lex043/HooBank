import { useRef } from "react";

import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("translate-x-[100%]");
  };

  return (
    <nav className="flex items-center justify-between py-5">
      <img
        src={logo}
        alt={logo}
        className="max-w-full w-28 hover:cursor-pointer"
      />

      <section
        ref={navRef}
        className="text-dimWhite translate-x-[100%] sm:translate-x-[0] transition-all sm:transition-none  sm:text-xs lg:text-[1rem] sm:relative fixed top-0 left-0 sm:h-0 h-full w-full flex sm:flex-row flex-col items-center justify-center sm:justify-end gap-3 bg-primary"
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
      </section>

      <button onClick={showNavbar} className="opacity-1 sm:opacity-0 sm:hidden">
        <img src={menu} alt="menu" />
      </button>
    </nav>
  );
};

export default Navbar;
