import Image from "next/image";

export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-light tracking-[0.42em] text-bone sm:text-[1.5rem]">
          SMART
        </span>
        {!compact && (
          <span className="mt-1 text-[0.5rem] font-light uppercase tracking-[0.34em] text-gold-300/80">
            Águas Claras
          </span>
        )}
      </span>
      <span className="h-7 w-px bg-gradient-to-b from-transparent via-gold-400/50 to-transparent" />
      <span className="flex items-center gap-1.5">
        <span className="text-[0.55rem] font-light uppercase tracking-[0.2em] text-muted">
          by
        </span>
        <Image
          src="/img/i5-mark.png"
          alt="i5"
          width={97}
          height={114}
          priority
          className="h-6 w-auto"
        />
      </span>
    </span>
  );
}
