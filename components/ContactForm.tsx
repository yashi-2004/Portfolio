"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2, XCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(3, "Subject should be at least 3 characters."),
  message: z.string().min(10, "Message should be at least 10 characters."),
  // honeypot field for spam protection — must stay empty
  company: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (data.company) return; // honeypot triggered, silently drop
    setStatus("loading");
    try {
      // Wire this up to EmailJS or the /api/contact route using Resend.
      // See README.md for setup instructions.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass mx-auto max-w-xl space-y-5 rounded-xl2 p-8 shadow-soft">
      {/* Honeypot field, hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("company")}
      />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60 dark:text-cream/60">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-xl border border-lavender/30 bg-white/50 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-blush-dark focus:bg-white focus:ring-4 focus:ring-blush-dark/10 dark:border-charcoal-border dark:bg-charcoal-surface/50 dark:focus:border-blush-dark dark:focus:bg-charcoal-surface"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60 dark:text-cream/60">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-xl border border-lavender/30 bg-white/50 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-blush-dark focus:bg-white focus:ring-4 focus:ring-blush-dark/10 dark:border-charcoal-border dark:bg-charcoal-surface/50 dark:focus:border-blush-dark dark:focus:bg-charcoal-surface"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60 dark:text-cream/60">
          Subject
        </label>
        <input
          id="subject"
          {...register("subject")}
          className="w-full rounded-xl border border-lavender/30 bg-white/50 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-blush-dark focus:bg-white focus:ring-4 focus:ring-blush-dark/10 dark:border-charcoal-border dark:bg-charcoal-surface/50 dark:focus:border-blush-dark dark:focus:bg-charcoal-surface"
          placeholder="Let's collaborate on…"
        />
        {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60 dark:text-cream/60">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full rounded-xl border border-lavender/30 bg-white/50 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-blush-dark focus:bg-white focus:ring-4 focus:ring-blush-dark/10 dark:border-charcoal-border dark:bg-charcoal-surface/50 dark:focus:border-blush-dark dark:focus:bg-charcoal-surface"
          placeholder="Tell me a bit about what you have in mind…"
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:scale-[1.01] hover:shadow-soft hover:opacity-95 active:scale-[0.99] disabled:opacity-60 dark:bg-cream dark:text-charcoal"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={16} /> Send message
          </>
        )}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-xl bg-babyblue/30 px-4 py-3 text-sm text-ink dark:bg-babyblue/10 dark:text-cream"
          >
            <CheckCircle2 size={16} className="text-green-500" /> Message sent — I&apos;ll get back to you soon!
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-xl bg-blush/30 px-4 py-3 text-sm text-ink dark:bg-blush-dark/10 dark:text-cream"
          >
            <XCircle size={16} className="text-red-400" /> Something went wrong — please email me directly instead.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
