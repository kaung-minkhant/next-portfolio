import Image from "next/image";
import AboutMe from "@/assets/aboutme.jpg";
import SkillExperienceEducation from "./SkillExperienceEducation/SkillExperienceEducation";
import SkillExperienceEducationMobile from "./SkillExperienceEducation/SkillExperienceEducationMobile";
export default function AboutSection() {
  return (
    <section className="text-background py-8 sm:py-20 min-h-[80vh]" id="about">
      <div className="lg:grid lg:grid-cols-5 gap-10 lg:items-start">
        <div className="overflow-hidden lg:col-span-2">
          <Image src={AboutMe} alt="about me image" className="m-auto" />
        </div>
        <div className="col-span-3 mt-5 lg:mt-0 flex flex-col gap-5 h-full">
          <div>
            <h2 className="text-4xl tracking-tight font-bold mb-5 text-background/70">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground text-justify">
              I am a Full Stack Developer from
              Myanmar. I do web development using React/NextJS, Vue, NodeJS,
              NestJS. I am quick to learn, adaptable, and have good problem
              solving skills. I can also work in a team and have been exposed to
              SCRUM teams. I love building web applications, end to end,
              although it can be quite difficult. I am always looking to expand
              my knowledge and skills.
            </p>
          </div>
          <div className="hidden xl:block flex-grow">
            <SkillExperienceEducation />
          </div>
        </div>
      </div>
      <SkillExperienceEducationMobile />
    </section>
  );
}
