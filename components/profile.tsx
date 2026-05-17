import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "./ui/github";
export function Profile() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="relative">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              className="object-cover w-full h-full"
              width={192}
              height={192}
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Full Stack Developer{" "}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Amarjargal Anton{" "}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6">
            I build accessible, pixel-perfect digital experiences for the web.
            Passionate about creating elegant solutions with modern
            technologies.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              Your Location
            </span>
            <div className="flex items-center gap-3 relative">
              <a
                href="https://github.com/anton-1108"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:antonamarjargal27@gmail.com"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
