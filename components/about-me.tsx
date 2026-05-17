import { Code2, Lightbulb, Users, Zap } from "lucide-react";
import { div } from "motion/react-client";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Building fast, optimized applications for great user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectiely in teams with clear communication",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Finding elegant solutions to complex technical challenges",
  },
];

export function AboutMe() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-12 ">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            About Me
          </h2>
          <p className="text-muted-foreground mb-6">Get to Know me better </p>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              i&apos;m a passionate Full Stack Developer with a keen eye for
              detail and a love for creating beautiful, functional web
              applications. My journey in tech started with curiosity and has
              evolved into a dedicated career building digital experiences.
            </p>
            <p>
              With expertise in modern web technologies like Next.js,
              TypeScript, and Node.js, I specialize in creating performance
              applications that users love to interact with. I believe in
              writing clean, maintainable code that stands the test of time.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open source projects, or sharing
              knowledge with the developer community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
            >
              <item.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
