type TrackMarqueeProps = {
  tracks: string[];
  speedMs?: number;
};

export default function TrackMarquee({ tracks, speedMs = 20000 }: TrackMarqueeProps) {
  const list = [...tracks, ...tracks];
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-6 whitespace-nowrap animate-marquee"
        style={{ animationDuration: `${speedMs}ms` }}
      >
        {list.map((track, idx) => (
          <span
            key={`${track}-${idx}`}
            className="px-4 py-2 rounded-full border border-[color:var(--brand-primary)]/40 bg-white text-sm text-[color:var(--brand-primary)]"
          >
            {track}
          </span>
        ))}
      </div>
    </div>
  );
}
