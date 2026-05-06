export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center bg-background">
      <div className="container mx-auto px-4">
        <p className="text-lg font-bold mb-2">
          Your Name
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Building intelligent systems using AI
        </p>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
