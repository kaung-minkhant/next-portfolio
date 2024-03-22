"use client";
import { useState, useTransition } from "react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Skills from "./Skills";
import Education from "./Education";
import { cn } from "@/lib/utils";

enum Tabs {
  Skill = "Skills",
  Education = "Education",
}
interface Props {}

export default function SkillExperienceEducation({}: Props) {
  const [activeTab, setActiveTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();
  const skillsContentVariants = {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  const handleSelectTab = (tabName: string) => {
    startTransition(() => {
      setActiveTab(tabName);
    });
  };
  const navItems = [
    {
      name: "Skills",
      onClick: () => handleSelectTab("Skills"),
    },
    {
      name: "Education",
      onClick: () => handleSelectTab("Education"),
    },
  ];

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;
    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };
  const setTransform = (
    item: EventTarget & HTMLLIElement,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 25);
    y.set(yRange * 25);
    // console.log({relativeX, relativeY, xRange, yRange})
  };
  return (
    <div className="w-full h-full flex flex-col">
      <ul className="flex gap-12 justify-between w-[50%] h-[30%] items-center m-auto">
        <AnimatePresence>
          {navItems.map((item): React.ReactNode => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const xText = useTransform(x, (value) => value * 0.5);
            const yText = useTransform(y, (value) => value * 0.5);
            return (
              <motion.li
                key={item.name}
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  setTransform(item, event, x, y);
                }}
                onPointerLeave={(event) => {
                  x.set(0);
                  y.set(0);
                }}
                className={cn(
                  "px-8 py-3 rounded-xl about-me-nav hover:bg-hover block cursor-pointer relative",
                  activeTab === item.name ? "bg-hover" : ""
                )}
                style={{ x, y }}
                onClick={item.onClick}
              >
                <motion.span
                  style={{
                    x: xText,
                    y: yText,
                  }}
                  className="text-2xl font-semibold text-background/70 z-10 block relative"
                >
                  {item.name}
                </motion.span>
                {activeTab === item.name ? (
                  <motion.div
                    transition={{ type: "spring" }}
                    layout
                    layoutId="underline"
                    className="absolute rounded-xl left-0 bottom-0 w-full h-full z-1 bg-active/50"
                  />
                ) : null}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
      {/* <TabButton
          onClick={() => handleSelectTab(Tabs.Skill)}
          isActive={activeTab === Tabs.Skill}
        >
          Skills
        </TabButton>
        <TabButton
          onClick={() => handleSelectTab(Tabs.Education)}
          isActive={activeTab === Tabs.Education}
        >
          Education
        </TabButton> */}
      <div className="w-full mt-5 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={skillsContentVariants}
            initial="from"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
            className="h-full p-4"
          >
            {activeTab === Tabs.Skill && <Skills />}
            {activeTab === Tabs.Education && <Education />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
