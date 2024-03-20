'use client'
import { motion } from "framer-motion";
export default function TabButton({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => any;
}) {
  const tabVariants = {
    active: {
      color: '#ff0000',
      transition: {
        type: 'tween',
        duratin: 1,
      }
    },
    inactive: {
      color: '#00ff00',
      transition: {
        type: 'tween',
        duratin: 1,
      }
    }
  }
  return (
    <motion.button
      className={`block border border-none rounded-full text-xl font-bold w-full px-5 py-3 shadow-lg hover:bg-active ${
        isActive ? "bg-active" : "bg-card-foreground"
      } flex-grow basis-0`}
      onClick={onClick}
      variants={tabVariants}
      animate={isActive ? 'active' : 'inactive'}
    >
      {children}
    </motion.button>
  );
};