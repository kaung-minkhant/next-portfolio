import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-primary">
      <NavBar />
      <div className="container mx-auto px-12 py-10 pt-5">
        <HeroSection />
      </div>
    </main>
  );
}
