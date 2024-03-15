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
export default function Humberger({ navLinks }: Props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openHumburger = () => {
    setIsNavOpen(true);
  };
  const closeHumburger = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <div className="block md:hidden flex justify-center items-center">
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
          {isNavOpen && <MenuOverlay links={navLinks} />}
        </AnimatePresence>
      </div>
      <NavBarLinks links={navLinks} />
    </>
  );
}
