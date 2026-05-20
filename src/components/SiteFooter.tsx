import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Zodiac17 — Celestial Research Bureau
        </div>
        <div className="flex gap-10">
          <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Method
          </Link>
          <Link to="/library" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Library
          </Link>
          <Link to="/transits" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Ephemeris
          </Link>
        </div>
      </div>
    </footer>
  );
}