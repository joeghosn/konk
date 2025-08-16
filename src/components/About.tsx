import React from "react";
import { Container, SectionTitle } from "./Shared";

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="What is KONK?"
          subtitle="Kaspa speed. Bonk energy. Fair-launch ethos."
        />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white/80 text-base leading-7">
            <p>
              KONK (Kaspa Bonk) is a meme coin powered by the Kaspa community
              and fueled by the wild energy of Bonk culture. Built for speed,
              fun, and transparency, we’re launching on Moonbound so everyone
              gets a fair shot—no insiders, no shady deals. Just a straight-up,
              community-first coin for anyone ready to join the ride.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/75">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-kaspa-500" /> Fair
                launch on Moonbound
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-bonk-500" /> 100%
                community
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
