"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";

interface Props {
  stepsObject: EducationGlobal
}
export default function EducationMobile({stepsObject}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [progressY, setProgressY] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  useTransform(() => {
    if (scrollYProgress.get() !== progressY) {
      setProgressY(scrollYProgress.get());
    }
  });
  useEffect(() => {
    function tick() {
      stepsObject.steps.map((step) => {
        if (progressY > step.mobileScrollPosition!) {
          (
            document.querySelector(`.step-${step.id}-mobile`) as HTMLElement
          ).style.left = `15%`;
        } else {
          (document.querySelector(`.step-${step.id}-mobile`) as HTMLElement).style.left =
            "-100vw";
        }
      });
    }
    tick();
  }, [progressY]);
  return (
    <div className="w-full">
      {/* <h2 className="mt-5 text-3xl font-bold ml-[5%]" style={{
          // boxShadow: "0px 0px 30px #888888"
        }}>Education</h2> */}
      <div
        ref={ref}
        style={{
          height: `${stepsObject.mobileHeight || 500}px`
        }}
        className={cn(
          `w-full relative`,
          ""
        )}
        //"border-2 border-red-400"
      >
        {stepsObject.steps.map((step) => {
          return (
            <Fragment key={step.id}>
              <motion.div
                className={`step-${step.id}-mobile p-5 w-[60%] absolute origin-center -translate-y-[50%] transition-all`}
                style={{ top: `${step.mobileTimelinePosition}px` }}
              >
                <h2 className="text-3xl font-semibold text-muted-foreground mb-2">
                  {step.contentOnAnimate}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {step.mainContent}
                </p>
              </motion.div>
            </Fragment>
          );
        })}
        <motion.div
          className="w-2 bg-hover rounded-b-md absolute top-0 left-[10%] bottom-0 origin-center -translate-x-[50%]"
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        ></motion.div>
      </div>

      {/* <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full h-[20vh] bg-red-300 mt-5" /> */}
    </div>
  );
}
