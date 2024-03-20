"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";

export default function Test() {
  const ref = useRef<HTMLDivElement>(null);
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

  const stepsObject: StepObjectType = {
    transitionLength: 30,
    transitionDuration: 1,
    size: "w-[20px] h-[20px]",
    mobileHeight: "h-[850px]",
    steps: [
      {
        id: "0",
        type: "STEP",
        class: "step0",
        transitionDuration: 0.5,
        contentOnAnimate: "CAE",
        mainContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla ratione ullam explicabo esse ipsum perferendis numquam id. Quo aliquid doloremque nesciunt accusamus eos cupiditate quidem officia praesentium minima neque!",
        contentOnAnimatePostion: "top",
        mobileTimelinePosition: "top-[220px]",
        mobileScrollPosition: 0.18,
      },
      {
        id: "1",
        type: "STEP",
        class: "step1",
        contentOnAnimate: "Yangon Technological University",
        mainContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla ratione ullam explicabo esse ipsum perferendis numquam id. Quo aliquid doloremque nesciunt accusamus eos cupiditate quidem officia praesentium minima neque!",
        contentOnAnimatePostion: "bottom",
        mobileTimelinePosition: "top-[480px]",
        mobileScrollPosition: 0.45,
      },
      {
        id: "2",
        type: "STEP",
        class: "step2",
        contentOnAnimate: "Auston University",
        mainContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla ratione ullam explicabo esse ipsum perferendis numquam id. Quo aliquid doloremque nesciunt accusamus eos cupiditate quidem officia praesentium minima neque!",
        contentOnAnimatePostion: "top",
        mobileTimelinePosition: "top-[730px]",
        mobileScrollPosition: 0.7,
      },
    ],
  };

  useEffect(() => {
    function tick() {
      stepsObject.steps.map((step) => {
        if (progressY > step.mobileScrollPosition!) {
          (
            document.querySelector(`.${step.class}`) as HTMLElement
          ).style.left = `15%`;
        } else {
          (document.querySelector(`.${step.class}`) as HTMLElement).style.left =
            "-100vw";
        }
      });
    }
    tick();
    console.log(progressY);
  }, [progressY]);

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-background relative">
      <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full h-[20vh] bg-red-300 mt-5" />
      <div className="w-full">
        <h2 className="mt-5 text-3xl font-bold ml-[5%]" style={{
          // boxShadow: "0px 0px 30px #888888"
        }}>Education</h2>
        <div
          ref={ref}
          className={cn(`w-full ${stepsObject.mobileHeight} relative`, "")}
          //"border-2 border-red-400"
        >
          {stepsObject.steps.map((step) => {
            return (
              <Fragment key={step.id}>
                {/* <div className={ `w-5 h-5 border-2 border-hover rounded-full absolute ${step.mobileTimelinePosition} left-[10%] origin-center -translate-x-[39%]` }></div> */}
                <motion.div
                  className={`${step.class} p-5 w-[60%] absolute ${step.mobileTimelinePosition} origin-center -translate-y-[50%] transition-all`}
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
        <div className="w-full h-[20vh] bg-red-300 mt-5" />
        <div className="w-full h-[20vh] bg-red-300 mt-5" />
        <div className="w-full h-[20vh] bg-red-300 mt-5" />
      </div>
    </div>
  );
}
