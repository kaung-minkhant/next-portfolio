"use client";
import { motion, useMotionValueEvent, useScroll, animate, useAnimationControls } from "framer-motion";
import { useRef, useState } from "react";
interface Props {
  experience: ExperienceType;
}
export default function ExperienceCard({ experience }: Props) {
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
  const control = useAnimationControls()
  const itemVariant = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  return (
    <motion.div
      variants={itemVariant}
      className="text-background/80 min-w-[300px] border-2 border-border bg-foreground rounded-xl p-8 space-y-5 z-[1] relative flex flex-col"
    >
      <h3 className="text-3xl font-semibold">{experience.name}</h3>
      <p className="text-xl italic">{experience.position}</p>
      <p className="text-lg italic">
        {experience.fromDate} - {experience.toDate}
      </p>
      <div className="flex-grow">
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
