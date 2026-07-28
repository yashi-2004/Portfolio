export function RibbonDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="my-4 flex w-full justify-center" aria-hidden>
      <svg
        width="220"
        height="20"
        viewBox="0 0 220 20"
        className={flip ? "rotate-180" : ""}
      >
        <path
          d="M2 10 C 40 -4, 70 24, 110 10 S 180 -4, 218 10"
          fill="none"
          stroke="url(#ribbon-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="ribbon-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F3C6D0" />
            <stop offset="50%" stopColor="#C9B6E4" />
            <stop offset="100%" stopColor="#BFE1F0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
