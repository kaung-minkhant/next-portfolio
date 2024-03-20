"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  title: string;
  onclick?: () => any;
  isActive?: boolean;
}
const linkVariant = {
  hover: {
    textShadow: "0px 0px 10px #888888",
    color: "#fff",
    y: -5,
  },
};
export default function NavLink({ href, title, onclick, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onclick}
      className={ `block py-2 pl-3 pr-4 rounded text-xl ${isActive ? "text-background font-bold drop-shadow-md" : "text-background/50"}` }
    >
      <motion.div variants={linkVariant} whileHover='hover'>{title}</motion.div>
    </Link>
  );
}
