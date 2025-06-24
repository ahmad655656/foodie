import { Navlinks } from "@/constant/constant";
import React from "react";
import { CgClose } from 'react-icons/cg'
import { Link as ScrollLink } from "react-scroll";

type Props = {
  closeNav: () => void;
  showNav: boolean;
}
const MobileNav = ({showNav, closeNav}: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%] '
  return (
    <div>
      {/* OverLay */}
      <div className={`${navOpen} fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen `}></div>
      {/* NavLinks */}
      <div className={`${navOpen} text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-950 space-y-6 z-[1050] `}>
        {Navlinks.map((link) => {
          return (
            <ScrollLink spy smooth to={link.url} key={link.id}>
              <p className="text-white cursor-pointer w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white ">{link.text}</p>
            </ScrollLink>
          );
        })}
        {/* Close icon */}
        <CgClose onClick={closeNav} className="absolute cursor-pointer top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 " />
      </div>
    </div>
  );
};

export default MobileNav;
