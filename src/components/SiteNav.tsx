import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavLink = { to: string; label: string; exact?: boolean };
const primaryLinks: NavLink[] = [
  { to: "/", label: "Ephemeris / Live Transits", exact: true },
  { to: "/transits", label: "Transits" },
  { to: "/signs", label: "Signs" },
  { to: "/houses", label: "Houses" },
];
const moreLinks: NavLink[] = [
  { to: "/library", label: "Planets" },
  { to: "/learn/sidereal", label: "Sidereal" },
  { to: "/cycles/saturn-taurus", label: "Advanced Info" },
  { to: "/about", label: "Info" },
];
const allLinks: NavLink[] = [...primaryLinks, ...moreLinks];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8 min-w-0">
          <Link to="/" className="font-serif italic text-2xl tracking-tight text-foreground">
            Zodiac17
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={l.exact ? { exact: true } : undefined}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
                More <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {moreLinks.map((l) => (
                  <DropdownMenuItem key={l.to} asChild>
                    <Link to={l.to} className="w-full cursor-pointer">
                      {l.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/transits"
            className="hidden sm:flex items-center text-sm font-medium bg-primary text-primary-foreground py-2 pr-3 pl-2 rounded-md ring-1 ring-primary/50 transition-transform active:scale-[0.98] hover:scale-[1.02]"
          >
            <svg className="size-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Find Aspect
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center size-10 rounded-md ring-1 ring-border text-foreground hover:bg-card transition-colors"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="md:hidden border-t border-border bg-background">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col">
            {allLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={l.exact ? { exact: true } : undefined}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/50 last:border-b-0"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/transits"
              onClick={() => setOpen(false)}
              className="mt-3 sm:hidden flex items-center justify-center text-sm font-medium bg-primary text-primary-foreground py-2 rounded-md ring-1 ring-primary/50"
            >
              Find Aspect
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}