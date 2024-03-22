import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { getHomePageGlobal } from "@/network/cms";

export default async function Home() {
  const data = await getHomePageGlobal();
  const jobList = data?.position.map((position) => position.title);
  return (
    <div className="container relative z-[1] mx-auto px-12 py-10 pt-5">
      <HeroSection
        name={data?.name}
        shortDescription={data?.shortDescription}
        jobList={jobList}
      />
      <AboutSection />
    </div>
  );
}
