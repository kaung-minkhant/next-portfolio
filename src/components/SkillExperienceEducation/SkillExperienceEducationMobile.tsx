"use client";

import EducationMobile from "./EducationMobile";
import Skills from "./Skills";
import useScreenSizes from "@/hooks/useScreenSizes";

interface Props {
  stepsObject: EducationGlobal
}
export default function SillExperienceEducationMobile({stepsObject}: Props) {
  const { smallerThanXL } = useScreenSizes();
  // if (!smallerThanXL) return null;
  return (
    <div className="mt-20">
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-background/70 mb-10">Skills</h2>
        <Skills />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-background/70 mb-0">
          Education
        </h2>
        <EducationMobile stepsObject={stepsObject} />
      </div>
    </div>
  );
}
