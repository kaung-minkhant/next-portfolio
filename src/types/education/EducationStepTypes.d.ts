type StepType = {
  size?: string; // tw w and h // size of step in desktop view
  id: string; // id of step
  type: "STEP";
  class: string; // class name of step element
  animateStep?: any; // how to animate step in desktop view
  initialStep?: any; // initial state of step in desktop view
  animateTransition?: any; // transtion line animation typically in width, but can be anything in desktop view 
  animateDuration?: number; // step animation duration in desktop view
  initialTransition?: any; // transition line initial state in desktop view
  transitionDuration?: number; // transition line animation duration in desktop view
  contentOnAnimate?: string; // main content header to show
  contentOnAnimatePostion?: "top" | "bottom"; // header position in desktop view
  mainContent?: string;
  mobileTimelinePosition?: string; // tw top-[] // position of the step in mobile view
  mobileScrollPosition?: number; // scroll position of the step in mobile view
};

type StepObjectType = {
  transitionLength: number; // width of animated transition line in desktop view, overidden by animateTransition
  size?: string; // tw width and height // size of step in desktop view, overidden by size in steptype
  stepTransitionDuration?: number; // step animation duration in desktop view overidden by animateDuration in steptype
  transitionDuration?: number; // transition line animation duration in desktop view overidden by transitionDuration in steptype
  mobileHeight?: string; // tw h-[] // height of the scroll timeline container in mobile view
  steps: StepType[]; // steps to show
};