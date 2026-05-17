import { Heart, Mail } from "lucide-react";
import { GithubIcon } from "./ui/github";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/anton-1108"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="malito:antonamarjargal27@gmail.com"
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p>
          Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> usi
          Next.js & Tailwind CSS
        </p>
        <p>Amarjargal Anton. All rights reserved.</p>
      </div>
    </footer>
  );
}
