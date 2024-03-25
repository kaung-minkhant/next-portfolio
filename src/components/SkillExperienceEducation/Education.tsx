"use client";

import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { DoubleClickIcon, PointerIcon } from "../ui/icons";

interface CreateProps {
  stepsObject: StepObjectType;
  doneAnimating: boolean;
  setAbout?: any;
}

const Step = ({
  step,
  stepWidth,
  stepHeight,
  doneAnimating,
  // setAbout,
  i,
  steps,
}: {
  steps: StepType[];
  step: StepType;
  stepWidth?: number;
  stepHeight?: number;
  doneAnimating: boolean;
  setAbout?: any;
  i: number;
}) => {
  if (step.type === "STEP") {
    const initialStep = step.initialStep
      ? JSON.parse(step.initialStep)
      : {
          opacity: 0,
        };
    const initialTransition = step.initialTransition
      ? JSON.parse(step.initialTransition)
      : { width: 0 };
    return (
      <Fragment key={step.id}>
        <motion.div
          className={`step-${step.id} border-4 border-background rounded-full bg-hover relative cursor-pointer`}
          initial={initialStep}
          style={{
            width: `${step.stepWidth || stepWidth}px`,
            height: `${step.stepHeight || stepHeight}px`,
          }}
        >
          <motion.div
            className="w-full h-full"
            // onHoverStart={() => {
            //   if (doneAnimating) {
            //     setAbout({
            //       content: step.mainContent,
            //     });
            //   }
            // }}
            // onHoverEnd={() =>
            //   setAbout({
            //     content:
            //       "I am a Full Stack Developer from Myanmar. I do web development using React/NextJS, Vue, NodeJS, NestJS. I am quick to learn, adaptable, and have good problem solving skills. I can also work in a team and have been exposed to SCRUM teams. I love building web applications, end to end, although it can be quite difficult. I am always looking to expand my knowledge and skills.",
            //   })
            // }
          ></motion.div>
          {/* <AnimatePresence> */}
          {i === 0 && doneAnimating && (
            <motion.div
              className="absolute top-0"
              initial={{
                top: "15px",
              }}
              animate={{
                top: "20px",
              }}
              transition={{
                duration: 0.5,
                type: "tween",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <DoubleClickIcon width={20} height={20} />
              {/* <PointerIcon
                width={50}
                height={50}
                classname="-rotate-[30deg] opacity-30"
              /> */}
            </motion.div>
          )}
          {/* </AnimatePresence> */}
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
            initial={initialTransition}
            id={`step-${step.id}-transition`}
          ></motion.div>
        )}
      </Fragment>
    );
  }
  return null;
};

const CreateSteps = ({ stepsObject, doneAnimating }: CreateProps) => {
  const steps = stepsObject.steps;
  const stepWidth = stepsObject.stepWidth;
  const stepHeight = stepsObject.stepHeight;
  return (
    <>
      {steps.map((step: StepType, i: number) => {
        return (
          <Step
            doneAnimating={doneAnimating}
            i={i}
            // setAbout={setAbout}
            step={step}
            stepWidth={stepWidth}
            stepHeight={stepHeight}
            steps={steps}
            key={step.id}
          />
        );
      })}
    </>
  );
};

interface Props {
  setAbout: any;
  stepsObject: EducationGlobal;
}
export default function Education({stepsObject}: Props) {
  const [scope, animate] = useAnimate();
  const [doneAnimating, setDoneAnimating] = useState(false);

  useEffect(() => {
    const animateSequence = async (stepsObject: StepObjectType) => {
      const steps = stepsObject.steps;
      for (let [i, step] of steps.entries()) {
        if (document.querySelector(`.step-${step.id}`)) {
          const animateStep = step.animateStep
            ? JSON.parse(step.animateStep)
            : { opacity: 1 };
          await animate(`.step-${step.id}`, animateStep, {
            duration:
              step.animateDuration || stepsObject.stepTransitionDuration || 0.5,
          });
        }
        if (i !== steps.length - 1) {
          if (document.querySelector("#step-" + step.id + "-transition")) {
            const animateTransition = step.animateTransition
              ? JSON.parse(step.animateTransition)
              : {
                  width: `${stepsObject.transitionLength || 20}%`,
                };
            await animate(
              "#step-" + step.id + "-transition",
              animateTransition,
              {
                duration:
                  step.transitionDuration ||
                  stepsObject.transitionDuration ||
                  0.5,
              }
            );
          }
        }
      }
      setDoneAnimating(true);
      // await animate(scope.current, { opacity: 0 }, {
      //   duration: 0.5
      // })
    };
    animateSequence(stepsObject);
  }, []);
  return (
    <div className="h-full overflow-hidden relative flex items-center justify-center">
      <motion.div
        className="flex items-center w-full justify-center"
        ref={scope}
      >
        <CreateSteps
          stepsObject={stepsObject}
          doneAnimating={doneAnimating}
          // setAbout={setAbout}
        />
      </motion.div>
    </div>
  );
}
