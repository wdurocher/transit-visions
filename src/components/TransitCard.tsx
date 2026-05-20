import { Link } from "@tanstack/react-router";
import type { Transit } from "@/data/transits";

export function TransitCard({ t }: { t: Transit }) {
  return (
    <Link
      to="/transits/$slug"
      params={{ slug: t.slug }}
      className="bg-background p-8 flex flex-col h-full group hover:bg-card/40 transition-colors"
    >
      <div className="flex justify-between items-start mb-12">
        <div className="size-12 bg-card rounded ring-1 ring-border grid place-items-center overflow-hidden">
          <img src={t.image} alt="" className="size-full object-cover opacity-90" />
        </div>
        <span
          className={`text-[10px] font-mono uppercase tracking-tighter ${
            t.status === "Retrograde" ? "text-amber-500" : "text-muted-foreground"
          }`}
        >
          {t.status}
        </span>
      </div>
      <h3 className="text-xl font-medium mb-4 text-balance leading-tight">{t.title}</h3>
      <p className="text-sm text-muted-foreground text-pretty max-w-[40ch] mb-8">{t.short}</p>
      <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{t.window}</span>
        <span className="text-xs font-medium text-primary group-hover:underline">Details →</span>
      </div>
    </Link>
  );
}