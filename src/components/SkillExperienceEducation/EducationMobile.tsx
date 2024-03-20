'use client'

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function EducationMobile() {
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
    // tick();
  }, [progressY]);
  return <div></div>
}