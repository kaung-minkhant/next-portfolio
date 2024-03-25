type StepType = {
  stepWidth?: number;
  stepHeight?: number;
  id: string; // id of step
  type: "STEP";
  animateStep?: string; // how to animate step in desktop view
  initialStep?: string; // initial state of step in desktop view
  animateTransition?: string; // transtion line animation typically in width, but can be anything in desktop view 
  animateDuration?: number; // step animation duration in desktop view
  initialTransition?: string; // transition line initial state in desktop view
  transitionDuration?: number; // transition line animation duration in desktop view
  contentOnAnimate?: string; // main content header to show
  contentOnAnimatePostion?: "top" | "bottom"; // header position in desktop view
  mainContent?: string;
  mobileTimelinePosition?: number; // tw top-[] // position of the step in mobile view
  mobileScrollPosition?: number; // scroll position of the step in mobile view
};

type StepObjectType = {
  transitionLength?: number; // width of animated transition line in desktop view, overidden by animateTransition
  stepWidth?: number;
  stepHeight?: number;
  stepTransitionDuration?: number; // step animation duration in desktop view overidden by animateDuration in steptype
  transitionDuration?: number; // transition line animation duration in desktop view overidden by transitionDuration in steptype
  mobileHeight?: number; // tw h-[] // height of the scroll timeline container in mobile view
  steps: StepType[]; // steps to show
};