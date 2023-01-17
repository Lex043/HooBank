import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <section className="pt-8 flex flex-wrap md:justify-between">
      <figure className="pb-3 sm:w-64">
        <img
          src={logo}
          alt="logo"
          className="max-w-[40%] lg:max-w-[60%] object-contain"
        />
        <p className="text-dimWhite text-[1rem] pt-3 ">
          A new way to make the payments easy, reliable and secure
        </p>
      </figure>
      <section className="sm:flex sm:gap-5 lg:gap-8">
        <ul>
          <li className="text-white list-none py-3 sm:py-0 sm:pb-2 text-[1.5rem]">
            Useful Links
          </li>
          <li className="text-dimWhite text-[1rem] list-none ">Content</li>
          <li className="text-dimWhite list-none text-[1rem] ">How it Works</li>
          <li className="text-dimWhite list-none text-[1rem] ">Create</li>
          <li className="text-dimWhite list-none text-[1rem] ">Explore</li>
          <li className="text-dimWhite list-none text-[1rem] ">
            Terms & Services
          </li>
        </ul>

        <ul>
          <li className="text-white list-none py-3 sm:py-0 sm:pb-2 text-[1.5rem]">
            Community
          </li>
          <li className="text-dimWhite list-none text-[1rem] ">Help Center</li>
          <li className="text-dimWhite list-none text-[1rem] ">Partners</li>
          <li className="text-dimWhite list-none text-[1rem] ">Suggestions</li>
          <li className="text-dimWhite list-none text-[1rem] ">Blog</li>
          <li className="text-dimWhite list-none text-[1rem] ">Newsletters</li>
        </ul>

        <ul>
          <li className="text-white list-none py-3 sm:py-0 sm:pb-2 text-[1.5rem]">
            Partner
          </li>
          <li className="text-dimWhite list-none text-[1rem] ">Our Partner</li>
          <li className="text-dimWhite list-none text-[1rem] ">
            Become a Partner
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Footer;
