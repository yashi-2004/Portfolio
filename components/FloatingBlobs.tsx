export function FloatingBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Shifted slightly inward but restored to full vibrant opacities for both light and dark modes */}
      <div className="absolute left-[8%] top-[8%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-blush/45 blur-[80px] dark:bg-blush-dark/25" />
      <div
        className="absolute right-[2%] top-[25%] h-96 w-96 -translate-y-1/2 animate-float rounded-full bg-lavender/40 blur-[90px] dark:bg-lavender-dark/20"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-[8%] left-[30%] h-80 w-80 animate-float rounded-full bg-babyblue/40 blur-[80px] dark:bg-periwinkle/20"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}
