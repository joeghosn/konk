import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container, GlowButton } from "./Shared";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.classList.add("overflow-hidden");
    } else {
      root.classList.remove("overflow-hidden");
    }
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  const links = [
    ["About", "#about"],
    ["How to Buy", "#how"],
    ["FAQ", "#faq"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/5">
      <Container className="flex items-center justify-between py-3">
        <a href="#hero" className="flex items-center gap-2 text-white">
          <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-kaspa-500/80 to-bonk-500/80">
            <div className="absolute inset-0 rounded-full shadow-[0_0_25px_4px_rgba(31,215,187,0.35)]" />
            <span className="sr-only">KONK</span>
          </div>
          <span className="font-extrabold text-xl tracking-tight">KONK</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-white transition">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GlowButton
            onClick={() =>
              document
                .querySelector("#how")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Buy $KONK
          </GlowButton>
        </div>

        <button
          className="md:hidden text-white p-2"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </Container>

      {open && (
        <div
          className="md:hidden fixed inset-0 z-[100] bg-[#070b18]/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="ml-auto h-dvh w-[86%] max-w-xs bg-[#0b1225] border-l border-white/10 p-6 overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 -mx-6 -mt-6 px-6 pb-4 bg-[#0b1225] flex items-center justify-between border-b border-white/10">
              <span className="text-white font-bold text-lg">Menu</span>
              <button
                className="text-white p-2"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-4 text-white/80">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
              <GlowButton
                className="mt-2"
                onClick={() => {
                  setOpen(false);
                  document
                    .querySelector("#how")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Buy $KONK
              </GlowButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
