"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  title: string;
}
const linkVariant = {
  hover: {
    textShadow: "0px 0px 10px #888888",
    color: "#fff",
    y: -5,
  },
};
export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 rounded text-background/50 text-xl"
    >
      <motion.div variants={linkVariant} whileHover='hover'>{title}</motion.div>
    </Link>
  );
}
