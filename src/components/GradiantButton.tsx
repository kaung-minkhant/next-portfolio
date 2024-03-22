"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}
export default function GradiantButton({ children }: Props) {
  return (
    <motion.button
      whileHover={{
        boxShadow: "0px 0px 10px #888888",
      }}
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-full text-secondary-foreground py-7 px-7 w-full sm:w-fit bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 border-2 border-transparent bg-clip-padding hover:from-slate-400 hover:via-slate-500 hover:to-slate-600"
      style={{
        transition: "background-image 2s ease-in-out",
      }}
    >
      {children}
    </motion.button>
  );
}
