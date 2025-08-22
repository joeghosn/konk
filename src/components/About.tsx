import React from "react";
import { Container, SectionTitle } from "./Shared";

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionTitle eyebrow="About" title="What is KONK?" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white/80 text-base leading-7">
            <p>
              KONK (Kaspa Bonk) is Kaspa’s very own Bonk. Just as Bonk became
              one of the biggest tokens on Solana, KONK aims to do the same on
              Kaspa. It will be among the first tokens to launch fairly on
              Moonbound once mainnet goes live. Cute and adorable — join in, or
              get bonked.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/75">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-kaspa-500" /> Fair
                launch on Moonbound
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-bonk-500" /> 100%
                Organic growth
              </li>
            </ul>
          </div>
          {/* DROPZONE: ABOUT_IMAGE (PNG/SVG, 900x900) */}
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 grid place-items-center">
              <div className="size-40 rounded-3xl bg-gradient-to-br from-bonk-500/15 to-kaspa-500/15 animate-float" />
            </div>
            <div className="absolute inset-x-8 bottom-6 text-center text-white/60 text-sm">
              /* ABOUT_IMAGE placeholder – swap with KONK art */
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
