import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

const Menu = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/experience",
    name: "Experience",
  },
  {
    link: "/contactMe",
    name: "Contact Me",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollThreshold = 50;
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= scrollThreshold);
    };

// Clean up by standardizing variable names (e.g. scrollThreshold), removing debugging statements, improving readability by using a constant for the scroll threshold and rephrasing the condition to make it more readable.

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <NavbarComponents
        className={`navbar z-[99999] px-6 py-1 flex justify-center items-center transition-all duration-300 ${
          isScrolled === true
            ? `w-[95%] fixed top-2 backdrop-blur-md md:left-8 left-4 border border-white/15 rounded-lg `
            : `w-full lg:bg-bg1 lg:bg-cover bg-color-primary`
          }`}
        isScroll={isScrolled}
      />
    </>
  );
};
// `navbar w-full px-6 py-1 bg-bg1 flex justify-between items-center transition-all duration-300`;
const NavbarComponents = ({ className, isScroll }: { className: string; isScroll: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className={className}>
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex justify-between">
          <div className="navbar-start flex gap-4 items-center">
            <div className="w-8 h-8 bg-color-accent rounded-md uppercase font-bold text-2xl flex justify-center items-center text-color-secondary">
              d.
            </div>
            <h1 className="text-2xl font-bold text-color-accent capitalize">
              dafizh
            </h1>
          </div>
          <nav className="navbar-center md:flex hidden items-center gap-6 text-lg capitalize text-color-accent">
            <ul className="menu menu-horizontal rounded-box flex gap-2">
              {Menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="lg:text-md md:text-lg font-semibold transition-all tooltip tooltip-bottom text-color-accent focus:text-color-accent focus:bg-black/10"
                    data-tip={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="navbar-end flex gap-4 items-center">
            <button className="lg:w-56 md:w-52 text-sm md:px-14 px-2 py-2 border-2 lg:border-color-primary lg:text-color-primary rounded-full lg:hover:bg-color-primary lg:hover:text-color-accent border-color-accent text-color-accent md:hover:border-color-primary transition-all">
              Download CV
            </button>
            <div className="dropdown block md:hidden dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className=""
              >
                <IoMdMenu size={36} className="text-color-accent" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content absolute z-[9] menu p-2 backdrop-blur-md rounded-box w-52"
              >
                {Menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-start font-semibold transition-all tooltip tooltip-left text-color-accent focus:text-color-accent focus:bg-black/10"
                      data-tip={item.name}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
