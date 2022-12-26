import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink, useLocation } from "react-router-dom";
import CustomButton from "./CustomButton";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const getActiveLinkClass = (to) => {
    return `${
      location.pathname === to ? "text-orange-800 " : ""
    }flex items-center uppercase`;
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        className="p-1 font-normal text-white hover:text-orange-600"
        onClick={() => setOpenNav(false)}
      >
        <NavLink
          to={"/pourquoi"}
          className={`${getActiveLinkClass("/pourquoi")}`}
        >
          Pourquoi
        </NavLink>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal text-white hover:text-orange-600"
        onClick={() => setOpenNav(false)}
      >
        <NavLink
          to={"/comment"}
          className={`${getActiveLinkClass("/comment")}`}
        >
          Comment
        </NavLink>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal text-white hover:text-orange-600"
        onClick={() => setOpenNav(false)}
      >
        <NavLink to={"/agir"} className={`${getActiveLinkClass("/agir")}`}>
          Agir
        </NavLink>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-normal text-white hover:text-orange-600"
        onClick={() => setOpenNav(false)}
      >
        <NavLink
          to={"/veggie-challenge"}
          className={`${getActiveLinkClass("/veggie-challenge")}`}
        >
          Veggie Challenge
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-full rounded-none py-2 px-4 bg-black bg-opacity-100 border-none sticky top-0 left-0 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <NavLink
          to={"/"}
          className="mr-4 cursor-pointer py-1.5 text-white"
          onClick={() => setOpenNav(false)}
        >
          <Typography variant="h2" className="font-oswald">
            <span>Le Cube</span>
          </Typography>
        </NavLink>
        <div className="hidden lg:block">{navList}</div>
        <NavLink
          to={"/contact"}
          className="hidden lg:inline-block"
          onClick={() => setOpenNav(false)}
        >
          <CustomButton>Contact</CustomButton>
        </NavLink>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <NavLink to={"/contact"} onClick={() => setOpenNav(false)}>
          <Button size="md" fullWidth className="mb-2">
            <span>Contact</span>
          </Button>
        </NavLink>
      </MobileNav>
    </Navbar>
  );
};

export default Nav;
