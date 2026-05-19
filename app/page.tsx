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
        <div className="border-t border-border" />
        <TechStack />
        <div className="border-t border-border" />
        <AboutMe />
        <div className="border-t border-border" />
        <ProjectSection />
        <Footer />
      </main>
    </div>
  );
}
