"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import MenuOverlay from "./MenuOverlay";
import { AnimatePresence } from "framer-motion";
import NavBarLinks from "./NavBarLinks";

interface Props {
  navLinks: {
    href: string;
    title: string;
  }[];
}

const preventScroll = (e: WheelEvent) => {
  e.preventDefault();
  e.stopPropagation();

  return false;
};
export default function Humberger({ navLinks }: Props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openHumburger = () => {
    document
      .getElementsByTagName("body")[0]
      .addEventListener("wheel", preventScroll, { passive: false });
    setIsNavOpen(true);
  };
  const closeHumburger = () => {
    setIsNavOpen(false);
    document
      .getElementsByTagName("body")[0]
      .removeEventListener("wheel", preventScroll);
  };
  return (
    <>
      <div className="md:hidden z-[3] flex justify-center items-center">
        {!isNavOpen ? (
          <button>
            <Menu size={35} color="white" onClick={openHumburger} />
          </button>
        ) : (
          <button>
            <X size={35} color="white" onClick={closeHumburger} />
          </button>
        )}
        <AnimatePresence>
          {isNavOpen && <MenuOverlay onclick={closeHumburger} links={navLinks} />}
        </AnimatePresence>
      </div>
      {isNavOpen && (
        <div
          onClick={closeHumburger}
          className="overlay w-[100vw] h-[100vh] absolute top-0 left-0 z-[2]"
        ></div>
      )}

      <NavBarLinks links={navLinks} />
    </>
  );
}
