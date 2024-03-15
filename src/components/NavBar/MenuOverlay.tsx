"use client";
import NavLink from "./NavBarLink";
import { motion } from "framer-motion";

interface Props {
  links: {
    href: string;
    title: string;
  }[];
}
const navOverlayVariants = {
  from: {
    y: -300,
  },
  to: {
    y: 0,
    boxShadow: "0px 4px 8px 0px #171717",
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 20,
      // mass: 100,
    },
  },
  exit: {
    y: -300,
  },
};
export default function MenuOverlay({ links }: Props) {
  return (
    <motion.div
      className="absolute top-[100%] w-[100%] right-0 bg-primary/90 shadow-xl pb-4 pt-2"
      variants={navOverlayVariants}
      initial="from"
      animate="to"
      exit="exit"
    >
      <ul className="flex flex-col items-center py-4">
        {links.map((link) => (
          <NavLink href={link.href} title={link.title} key={link.href} />
        ))}
      </ul>
    </motion.div>
  );
}
