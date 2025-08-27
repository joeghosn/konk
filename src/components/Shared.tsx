import React from "react";

export const Container: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <div className={`container max-w-7xl ${className}`}>{children}</div>
);

export const SectionTitle: React.FC<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
}> = ({ eyebrow, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-10">
    {eyebrow && (
      <p className="text-xs tracking-widest uppercase text-kaspa-400/80">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(31,215,187,0.18)]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-base sm:text-lg text-white/70">{subtitle}</p>
    )}
  </div>
);

export const GlowButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className = "", children, ...props }) => (
  <button
    {...props}
    className={`relative inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-white transition shadow-glow outline-none
    before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-kaspa-500/30 before:to-bonk-500/30 before:blur-md before:opacity-70 before:-z-10
    hover:scale-[1.02] active:scale-[0.99] border border-white/10 bg-white/5 ${className}`}
  >
    {children}
  </button>
);
