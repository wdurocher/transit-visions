type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export function PlanetOrb({ src, alt, className, loading = "lazy" }: Props) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="absolute inset-0 animate-orbital border border-border rounded-full scale-150 pointer-events-none" />
      <div className="absolute inset-0 [animation-direction:reverse] animate-orbital border border-border/40 rounded-full scale-[1.8] pointer-events-none" />
      <div className="relative z-10 size-full rounded-full overflow-hidden bg-card outline outline-1 -outline-offset-1 outline-border">
        <img src={src} alt={alt} loading={loading} className="size-full object-cover" />
      </div>
    </div>
  );
}