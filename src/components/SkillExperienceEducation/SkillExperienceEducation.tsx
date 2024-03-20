"use client";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { AnimatePresence, motion } from "framer-motion";
import Skills from "./Skills";
import Education from "./Education";

enum Tabs {
  Skill = 0,
  Education = 1,
}
interface Props {}

export default function SkillExperienceEducation({}: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPending, startTransition] = useTransition();
  const skillsContentVariants = {
    from: {
      opacity: 0
      // x: 200,
    },
    enter: {
      // x: 0,
      opacity: 1
    },
    exit: {
      // x: -100,
      opacity: 0
    },
  };
  const handleSelectTab = (index: number) => {
    startTransition(() => {
      setActiveTab(index);
    });
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-around text-background gap-10">
        <TabButton
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
        </TabButton>
      </div>
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
