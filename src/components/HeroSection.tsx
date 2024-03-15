import React from "react";
import PortfolioImage from "@/assets/portfolio.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import TypeAnimation from "./textTypingAnimation/TypeAnimation";
import FloatingImage from "./FloatingImage";
import GradiantButton from "./GradiantButton";

const HeroSection = () => {
  const jobList = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer'
  ]
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-7 text-background place-self-center text-center lg:text-left mt-0 lg:mt-10 space-y-4 lg:space-y-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
          Hi, I'm Kaung Min Khant
        </h1>
        <div className="">
          <TypeAnimation
            className="text-3xl lg:text-5xl tracking-tight mb-3 mt-3 lg:mb-5 lg:mt-5 font-semibold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent"
            textList={jobList}
          />
        </div>
        <div>
          <span className="text-lg text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            repellat saepe doloremque ipsa fugit commodi esse, alias
            necessitatibus hic modi.
          </span>
        </div>
        <div className="">
          <GradiantButton
            // className="bg-secondary text-secondary-foreground hover:bg-secondary/80 py-7 px-5 w-full sm:w-fit bg-gradient-to-br from-slate-300 hover:from-slate-400 via-slate-400 hover:via-slate-500 to-slate-500 hover:to-slate-600"
          >
            <Download className="mr-2 font-bold" size={20} />
            <span className="text-xl lg:text-2xl font-semibold">
              Download CV
            </span>
          </GradiantButton>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-10 lg:mt-0">
        <FloatingImage image={PortfolioImage} alt="Portfolio image" />
      </div>
    </section>
  );
};

export default HeroSection;
