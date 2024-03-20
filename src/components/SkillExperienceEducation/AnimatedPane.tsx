"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children?: React.ReactNode;
}

export default function AnimatedPane({ children }: Props) {
  console.log("client animation");
  return (
    <motion.div>
      <AnimatePresence>{children}</AnimatePresence>
    </motion.div>
  );
}
