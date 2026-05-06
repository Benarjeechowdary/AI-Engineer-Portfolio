export function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-lg font-bold mb-2">Benarjee Chowdary</p>
        <p className="text-sm text-muted-foreground mb-6">
          Building intelligent systems using AI
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Benarjee Chowdary. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
