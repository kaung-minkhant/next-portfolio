import Image from "next/image";
import AboutMe from "@/assets/aboutme.jpg";
import SkillExperienceEducationMobile from "./SkillExperienceEducation/SkillExperienceEducationMobile";
import { getEducationGlobal } from "@/network/cms";
import ExperienceAndProjects from "./SkillExperienceEducation/ExperienceAndProjects";

interface Props {
  longDescription: string;
}
export default async function AboutSection({ longDescription }: Props) {
  const data = await getEducationGlobal()
  return (
    <section className="text-background py-8 sm:py-20" id="about">
      <div className="lg:grid lg:grid-cols-5 gap-10 lg:items-start">
        <div className="overflow-hidden lg:col-span-2">
          <Image src={AboutMe} alt="about me image" className="m-auto" />
        </div>
        <div className="col-span-3 mt-5 lg:mt-0 flex flex-col h-full">
          <div className="h-[45%]">
            <h2 className="text-4xl tracking-tight font-bold mb-5 text-background/70">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground text-justify">
              {longDescription}
            </p>
          </div>
          {/* <div className="hidden xl:block flex-grow">
            <SkillExperienceEducation/>
          </div> */}
        </div>
      </div>
      <SkillExperienceEducationMobile stepsObject={data} />
      <ExperienceAndProjects />
    </section>
  );
}
