import { AboutMe } from "@/components/about-me";
import { Footer } from "@/components/footer";
import { Profile } from "@/components/profile";
import { ProjectSection } from "@/components/project-section";
import { TechStack } from "@/components/tech-stack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Profile />
        <div />
        <TechStack />
        <AboutMe />
        <ProjectSection />
        <Footer />
      </main>
    </div>
  );
}
