import React from "react";
import { Container, SectionTitle } from "./Shared";
import { Wallet, Coins, Settings, Rocket } from "lucide-react";

export default function HowToBuy() {
  const steps = [
    {
      title: "Get a Wallet",
      desc: "Install an EVM-compatible wallet (e.g., MetaMask).",
      icon: Wallet,
    },
    {
      title: "Fund with KAS",
      desc: "Acquire KAS and transfer to your wallet.",
      icon: Coins,
    },
    {
      title: "Go to Moonbound",
      desc: "Open the Moonbound fair-launch page for KONK.",
      icon: Settings,
    },
    {
      title: "Participate Fairly",
      desc: "Follow the launch instructions and receive $KONK.",
      icon: Rocket,
    },
  ] as const;

  return (
    <section id="how" className="py-20">
      <Container>
        <SectionTitle eyebrow="Guide" title="How to Get $KONK" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/85 transition hover:-translate-y-0.5 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div className="size-10 grid place-items-center rounded-xl bg-gradient-to-br from-kaspa-500/20 to-bonk-500/20">
                    <Icon />
                  </div>
                  <span className="text-white/50 text-sm">Step {i + 1}</span>
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
