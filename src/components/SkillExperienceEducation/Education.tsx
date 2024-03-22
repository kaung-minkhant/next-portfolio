"use client";

import { motion, useAnimate } from "framer-motion";
import { Fragment, useEffect } from "react";

interface CreateProps {
  stepsObject: StepObjectType;
}
const CreateSteps = ({ stepsObject }: CreateProps) => {
  const steps = stepsObject.steps;
  const stepSize = stepsObject.size || "w-10 h-10";
  return (
    <>
      {steps.map((step: StepType, i: number) => {
        if (step.type === "STEP") {
          const stepClassName = `${step.class} ${stepSize} border-4 border-background rounded-full bg-hover relative`;
          return (
            <Fragment key={step.id}>
              <motion.div
                className={stepClassName}
                initial={
                  step.initialStep || {
                    opacity: 0,
                  }
                }
              >
                {step.contentOnAnimate && (
                  <motion.div
                    className={`absolute ${
                      step.contentOnAnimatePostion === "top"
                        ? "bottom-full pb-5"
                        : "top-full pt-5"
                    } left-[50%] -translate-x-1/2 text-center`}
                  >
                    <span className="w-full text-sm md:text-xl whitespace-nowrap">
                      {step.contentOnAnimate}
                    </span>
                  </motion.div>
                )}
              </motion.div>
              {i !== steps.length - 1 && (
                <motion.div
                  className="h-1 bg-hover"
                  initial={step.initialTransition || { width: 0 }}
                  id={`${step.class}-transition`}
                ></motion.div>
              )}
            </Fragment>
          );
        }
      })}
    </>
  );
};

export default function Education() {
  const [scope, animate] = useAnimate();

  const steps: StepObjectType = {
    transitionLength: 30,
    transitionDuration: 1,
    size: "w-[40px] h-[20px]",
    steps: [
      {
        id: "0",
        type: "STEP",
        class: "step0",
        // animateTransition: { width: "50%" },
        transitionDuration: 0.5,
        contentOnAnimate: "CAE",
        contentOnAnimatePostion: "top",
      },
      {
        id: "1",
        type: "STEP",
        class: "step1",
        contentOnAnimate: "Yangon Technological University",
        contentOnAnimatePostion: "bottom",
      },
      {
        id: "2",
        type: "STEP",
        class: "step2",
        contentOnAnimate: "Auston University",
        contentOnAnimatePostion: "top",
      },
    ],
  };

  useEffect(() => {
    const animateSequence = async (stepsObject: StepObjectType) => {
      const steps = stepsObject.steps;
      for (let i = 0; i < steps.length; i++) {
        if (document.querySelector(`.step${i}`)) {
          await animate(".step" + i, steps[i].animateStep || { opacity: 1 }, {
            duration:
              steps[i].animateDuration ||
              stepsObject.stepTransitionDuration ||
              0.5,
          });
        }
        if (i !== steps.length - 1) {
          if (document.querySelector("#" + steps[i].class + "-transition")) {
            await animate(
              "#" + steps[i].class + "-transition",
              steps[i].animateTransition || {
                width: `${stepsObject.transitionLength}%`,
              },
              {
                duration:
                  steps[i].transitionDuration ||
                  stepsObject.transitionDuration ||
                  0.5,
              }
            );
          }
        }
      }
      // await animate(scope.current, { opacity: 0 }, {
      //   duration: 0.5
      // })
    };
    animateSequence(steps);
  }, []);
  return (
    <div className="h-full overflow-hidden relative flex items-center justify-center">
      <motion.div
        className="flex items-center w-full justify-center"
        ref={scope}
      >
        <CreateSteps stepsObject={steps} />
      </motion.div>
    </div>
  );
}
