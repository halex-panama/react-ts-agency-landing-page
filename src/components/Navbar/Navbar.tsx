import { useState } from "react";
import logo from "../../assets/website/logo.svg";
import DarkMode from "./DarkMode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

export const MenuLinks = [
  {
    id: 1,
    name: "Services",
    link: "/#services",
  },
  {
    id: 2,
    name: "Testimonials",
    link: "/#testimonials",
  },
  {
    id: 3,
    name: "Blogs",
    link: "/#blogs",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="bg-white dark:bg-black dark:text-white duration-300">
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            {/* logo section */}
            <div>
              <a href="#" className="flex items-center gap-3">
                <img src={logo} alt="logo" className="w-5" />
                <span className="text-2xl font-semibold text-nowrap">
                  Digital Agency
                </span>
              </a>
            </div>

            {/* desktop nav section */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map((link) => (
                  <li key={link.id} className="py-4">
                    <a
                      href={link.link}
                      className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500 "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <button className="btn-primary text-nowrap">
                  Get in Touch
                </button>
                <DarkMode />
              </ul>
            </div>

            {/* mobile menu button */}
            <div className="flex items-center gap-4 lg:hidden h-12">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              )}
            </div>
          </div>
        </div>

        {/* mobile navlinks item */}
        <MobileMenu showMenu={showMenu} onClick={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
