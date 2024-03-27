"use client";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { BootstrapIcon, CSSIcon, ExpressJSIcon, FramerIcon, HTMLIcon, JSIcon, MongodbIcon, NextJSIcon, NodeJSIcon, PostgresqlIcon, PythonIcon, ReactIcon, TSIcon, TailwindIcon, ThreeJSIcon, VueJSIcon } from "../ui/icons";
import useScreenSizes from "@/hooks/useScreenSizes";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const {smallerThanSM} = useScreenSizes()
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
      resize(ref)
      window.addEventListener("resize", () => {
        resize(ref);
      });
    }
    return () => {
      window.removeEventListener("resize", () => {
        resize(ref);
      });
    };
  }, [ref, smallerThanSM]);
  console.log(scrollWidth)
  const iconWidth = smallerThanSM ? 50 : 100
  return (
    <div className="h-full overflow-hidden relative">
      <div className="h-full w-3 absolute shadow-lg z-[2] bg-gradient-to-r from-primary to-primary/20"></div>
      <div className="h-full w-3 absolute right-0 shadow-lg z-[2] bg-gradient-to-l from-primary to-primary/20"></div>
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
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 1,
          },
        }}
      >
        <HTMLIcon width={iconWidth} height={iconWidth} />
        <CSSIcon width={iconWidth} height={iconWidth} /> 
        <JSIcon width={iconWidth} height={iconWidth} />
        <TSIcon width={iconWidth} height={iconWidth} />
        <ReactIcon width={iconWidth} height={iconWidth} />
        <NextJSIcon width={iconWidth} height={iconWidth} />
        <VueJSIcon width={iconWidth} height={iconWidth} />
        <TailwindIcon width={iconWidth} height={iconWidth} />
        <BootstrapIcon width={iconWidth} height={iconWidth} />
        <FramerIcon width={iconWidth} height={iconWidth} />
        <ThreeJSIcon width={iconWidth} height={iconWidth} />
        <NodeJSIcon width={iconWidth} height={iconWidth} />
        <ExpressJSIcon width={iconWidth} height={iconWidth} />
        <MongodbIcon width={iconWidth} height={iconWidth} />
        <PostgresqlIcon width={iconWidth} height={iconWidth} />
        <PythonIcon width={iconWidth} height={iconWidth} />

      </motion.div>
    </div>
  );
}
