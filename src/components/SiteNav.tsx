import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-serif italic text-2xl tracking-tight text-foreground">
            Observatory No. 9
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              Ephemeris
            </Link>
            <Link
              to="/transits"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              Transits
            </Link>
            <Link
              to="/library"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              Library
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              Method
            </Link>
          </div>
        </div>
        <Link
          to="/transits"
          className="flex items-center text-sm font-medium bg-primary text-primary-foreground py-2 pr-3 pl-2 rounded-md ring-1 ring-primary/50 transition-transform active:scale-[0.98] hover:scale-[1.02]"
        >
          <svg className="size-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          Find Aspect
        </Link>
      </div>
    </nav>
  );
}