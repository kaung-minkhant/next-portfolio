import { getExperienceCollection } from "@/network/cms";
import ExperienceCard from "./ExperienceCard";
import ExperienceContainer from "./ExperienceContainer";

export default async function Experience() {
  const data = await getExperienceCollection();
  const experience: ExperienceType[] = data.docs;
  // console.log({ experience });
  return (
    <section className="mb-10">
      <h2 className="text-4xl font-bold text-background/70 mb-10">
        Experience
      </h2>
      <ExperienceContainer experiences={experience} />
    </section>
  );
}
