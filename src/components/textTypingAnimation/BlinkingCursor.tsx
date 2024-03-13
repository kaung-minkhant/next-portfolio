'use client'
import { motion } from "framer-motion";
const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

type Props = {
  height?: number
}
export default function BlinkingCursor({height = 20}: Props) {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={ `inline-block h-[29px] lg:h-[40px] w-[5px] translate-y-1 bg-background ms-1` }
    />
  );
}
