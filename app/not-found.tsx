import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-6xl">
        <span className="text-gradient">404</span>
      </p>
      <h1 className="mt-4 font-display text-2xl font-semibold">This page wandered off.</h1>
      <p className="mt-2 max-w-sm text-sm text-ink/60 dark:text-cream/60">
        Even well-trained models miss sometimes. Let&apos;s get you back on track.
      </p>
      <div className="mt-6">
        <MagneticButton href="/" variant="primary">
          Back home
        </MagneticButton>
      </div>
      <Link href="/contact" className="mt-4 text-xs text-ink/50 underline dark:text-cream/50">
        Or let me know something&apos;s broken
      </Link>
    </div>
  );
}
