import { getExperienceCollection } from "@/network/cms";
import ExperienceCard from "./ExperienceCard";

export default async function Experience() {
  const data = await getExperienceCollection();
  const experience: ExperienceType[] = data.docs;
  console.log({ experience });
  let delay = -1;
  return (
    <section className="mb-10">
      <h2 className="text-4xl font-bold text-background/70 mb-10">
        Experience
      </h2>
      <div className="grid gap-4" style={{
        // gridTemplateColumns: "repeat(auto-fit, 1fr)",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}>
        {experience.map((exp) => {
          // delay++;  
          return <ExperienceCard delay={delay} key={exp.id} experience={exp} />;
        })}
      </div>
    </section>
  );
}
