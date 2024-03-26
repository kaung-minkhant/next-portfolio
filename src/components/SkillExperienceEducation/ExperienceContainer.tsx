"use client";

import { useEffect, useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

interface Props {
  experiences: ExperienceType[];
}
export default function ExperienceContainer({ experiences }: Props) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest)
    if ( ref.current && latest >= 200/ref.current.getBoundingClientRect().height ) {
      setShow(true);
    } else if (ref.current && latest <= 150/ref.current.getBoundingClientRect().height ) {
      setShow(false);
    }
  });
  const containerVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };
  // useEffect(() => {
  //   if (ref.current) {
  //     console.log(ref.current?.getBoundingClientRect().height);
  //   }
  // }, [ref]);
  return (
    <motion.div
      className="grid gap-4"
      ref={ref}
      variants={containerVariant}
      // initial='initial'
      animate={show ? "animate" : "initial"}
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {/* <motion.div className="size-10 bg-hover" variants={itemVariant}></motion.div>
      <motion.div className="size-10 bg-hover" variants={itemVariant}></motion.div> */}
      {experiences.map((exp) => {
        return <ExperienceCard key={exp.id} experience={exp} />;
      })}
    </motion.div>
  );
}
