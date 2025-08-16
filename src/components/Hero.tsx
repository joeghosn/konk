import React from "react";
import { Rocket, MessageCircle } from "lucide-react";
import { Container, GlowButton } from "./Shared";
import konkTransparent from "../assets/konk-transparent.png";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[70vw] max-w-[900px] rounded-full bg-gradient-to-b from-kaspa-500/10 to-bonk-500/10 blur-3xl" />
      <Container className="grid lg:grid-cols-2 gap-10 items-center pt-14 pb-20">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
            KONK:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kaspa-500 to-bonk-500">
              Kaspa Bonk
            </span>{" "}
            on Moonbound
          </h1>
          <p className="mt-4 text-white/75 text-lg max-w-xl">
            A high-energy meme coin launching fair and square on{" "}
            <strong>Moonbound</strong>, the first fair-launch launchpad on
            Kaspa.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <GlowButton
              onClick={() =>
                document
                  .querySelector("#how")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Rocket className="mr-2" /> Get $KONK
            </GlowButton>
            <GlowButton
              onClick={() =>
                document
                  .querySelector("#community")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <MessageCircle className="mr-2" /> Join Community
            </GlowButton>
          </div>
          <div className="mt-10 flex items-center gap-6 text-white/60 text-sm">
            <span>Kaspa • Moonbound • Fair Launch</span>
          </div>
        </div>
        <div className="relative">
          {/* DROPZONE: HERO_IMAGE_1 (PNG/SVG, 1200x1200). Replace placeholder with KONK mascot */}
          <div className="relative aspect-square w-full max-w-[520px] mx-auto rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden">
            <div className="absolute inset-x-10 bottom-6 text-center text-white/60 text-sm">
              <img
                src={konkTransparent}
                alt="KONK mascot"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
