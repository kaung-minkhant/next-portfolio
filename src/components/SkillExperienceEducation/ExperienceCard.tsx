"use client";
import { motion, useMotionValueEvent, useScroll, animate } from "framer-motion";
import { useRef, useState } from "react";
interface Props {
  experience: ExperienceType;
  delay: number;
}
export default function ExperienceCard({ experience, delay }: Props) {
  const variant = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  }
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.5) {
      setShow(true)
    } else if (latest <= 0.2) {
      setShow(false)
    }
  });
  return (
    <motion.div
      variants={variant}
      animate={show ? 'animate' : 'initial'}
      transition={{
        delay: delay,
        duration: 2,
      }}
      ref={ref}
      className="text-background/80 min-w-[300px] border-2 border-border bg-foreground rounded-xl p-8 space-y-5 z-[1] relative"
    >
      <h3 className="text-3xl font-semibold">{experience.name}</h3>
      <p className="text-xl italic">{experience.position}</p>
      <p className="text-lg italic">
        {experience.fromDate} - {experience.toDate}
      </p>
      <div>
        <p className="text-lg">{experience.content}</p>
      </div>
      <div>
        <ul className="flex gap-5">
          {experience.links.map((link) => (
            <li key={link.url} className="hover:underline text-hover">
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
