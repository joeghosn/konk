import React from "react";
import { Container } from "./Shared";

export default function CommunityCTA() {
  return (
    <section id="community" className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-gradient-to-br from-kaspa-500/20 to-bonk-500/20 blur-2xl" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Join the KONKmunity
            </h3>
            <p className="mt-2 text-white/75 max-w-2xl">
              Hop in our Telegram, follow on X, and help KONK bark, and roar
              across Kaspa.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                className="inline-flex items-center rounded-2xl px-5 py-3 font-semibold border border-white/10 bg-white/5 hover:scale-[1.02] transition"
                href="#"
                aria-label="Telegram"
              >
                Telegram
              </a>
              <a
                className="inline-flex items-center rounded-2xl px-5 py-3 font-semibold border border-white/10 bg-white/5 hover:scale-[1.02] transition"
                href="#"
                aria-label="X"
              >
                X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
