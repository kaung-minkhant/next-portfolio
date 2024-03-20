"use client";
import { motion } from "framer-motion";
import {
  Aarch64Plain,
  BootstrapOriginal,
  Css3Original,
  ExpressOriginal,
  FramermotionOriginal,
  Html5Original,
  JavascriptOriginal,
  MongodbOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  ThreejsOriginal,
  VuejsOriginal,
} from "devicons-react";
import { ComponentType, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface IconProps {
  icon: ComponentType | keyof JSX.IntrinsicElements;
  size?: number;
  color?: string;
  className?: string;
}
const Icons = ({ icon: Wrapper, size = 100, color, className }: IconProps) => {
  return <Wrapper size={size} className={cn('shrink-0', className)} color={color} />;
};
export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const resize = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const scrollWidth = ref.current!.scrollWidth;
      const width = ref.current!.clientWidth;
      const height = ref.current!.clientHeight;
      setWidth(width);
      setScrollWidth(scrollWidth);
    }
  };
  useEffect(() => {
    if (ref.current) {
      const scrollWidth = ref.current.scrollWidth;
      const width = ref.current.clientWidth;
      setWidth(width);
      setScrollWidth(scrollWidth);
      window.addEventListener("resize", () => {
        resize(ref);
      });
    }
    return () => {
      window.removeEventListener("resize", () => {
        resize(ref);
      });
    };
  }, [ref]);
  return (
    <div className="h-full overflow-hidden relative">
      <div className="h-full w-3 absolute rounded-sm shadow-lg z-[2] bg-gradient-to-r from-primary to-primary/20"></div>
      <div className="h-full w-3 absolute right-0 rounded-sm shadow-lg z-[2] bg-gradient-to-l from-primary to-primary/20"></div>
      <motion.div
        key={width}
        ref={ref}
        className="flex items-center h-full gap-7"
        initial={{
          x: 0,
        }}
        animate={{
          x: -1 * (scrollWidth - width + 30) || 0,
          transition: {
            type: "tween",
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 1,
          },
        }}
      >
        <Icons icon={Html5Original} />
        <Icons icon={Css3Original} />
        <Icons icon={JavascriptOriginal} />
        <Icons icon={ReactOriginal} />
        <Icons icon={NextjsOriginal} />
        <Icons icon={VuejsOriginal} />
        <Icons icon={TailwindcssOriginal} />
        <Icons icon={BootstrapOriginal} />
        <Icons icon={FramermotionOriginal} />
        <Icons icon={ThreejsOriginal} className="text-background" />
        <Icons icon={NodejsOriginal} />
        <Icons icon={ExpressOriginal} />
        <Icons icon={MongodbOriginal} />
        <Icons icon={PostgresqlOriginal} />
        <Icons icon={PythonOriginal} />
      </motion.div>
    </div>
  );
}
