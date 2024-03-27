"use client";

import useScreenSizes from "@/hooks/useScreenSizes";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";

interface Props {
  stepsObject: EducationGlobal;
}
export default function EducationMobile({ stepsObject }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { smallerThanSM } = useScreenSizes();
  const [progressY, setProgressY] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  useTransform(() => {
    if (scrollYProgress.get() !== progressY) {
      setProgressY(scrollYProgress.get());
    }
  });
  useEffect(() => {
    function tick() {
      stepsObject.steps.map((step) => {
        if (
          progressY >
          (smallerThanSM
            ? step.mobileScrollPosition! - 0.1
            : step.mobileScrollPosition!)
        ) {
          (
            document.querySelector(`.step-${step.id}-mobile`) as HTMLElement
          ).style.left = smallerThanSM ? "10%" : "15%";
        } else {
          (
            document.querySelector(`.step-${step.id}-mobile`) as HTMLElement
          ).style.left = "-100vw";
        }
      });
    }
    tick();
  }, [progressY, stepsObject.steps]);
  return (
    <div className="w-full">
      {/* <h2 className="mt-5 text-3xl font-bold ml-[5%]" style={{
          // boxShadow: "0px 0px 30px #888888"
        }}>Education</h2> */}
      <div
        ref={ref}
        style={{
          height: `${
            stepsObject.mobileHeight
              ? stepsObject.mobileHeight + (smallerThanSM ? 20 : 0)
              : 500
          }px`,
        }}
        className={cn(`w-full relative`, "")}
        //"border-2 border-red-400"
      >
        {stepsObject.steps.map((step) => {
          return (
            <Fragment key={step.id}>
              <motion.div
                className={`step-${step.id}-mobile p-5 bg-green-300 w-[90%] sm:bg-blue-400 sm:w-[80%] lg:bg-red-400 lg:w-[60%] absolute origin-center -translate-y-[50%] transition-all`}
                style={{
                  top: `${
                    smallerThanSM
                      ? step.mobileTimelinePosition! - 20
                      : step.mobileTimelinePosition
                  }px`,
                }}
              >
                <h2 className="text-xl sm:text-3xl font-semibold text-muted-foreground mb-2">
                  {step.contentOnAnimate}
                </h2>
                <p className="text-sm sm:text-lg text-muted-foreground">
                  {step.mainContent}
                </p>
              </motion.div>
            </Fragment>
          );
        })}
        <motion.div
          className="w-2 bg-hover rounded-b-md absolute top-0 left-[5%] sm:left-[10%] bottom-0 origin-center -translate-x-[50%]"
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        ></motion.div>
      </div>

      {/* <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full h-[20vh] bg-red-300 mt-5" /> */}
    </div>
  );
}
