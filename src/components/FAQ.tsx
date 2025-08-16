import React, { useState } from "react";
import { Container, SectionTitle } from "./Shared";
import { ChevronDown } from "lucide-react";

const Item: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 self-start">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} mt-2`}
      >
        <div className="overflow-hidden text-white/75 text-sm leading-6">
          {a}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const items = [
    [
      "Which chain?",
      "Kaspa. KONK launches on Moonbound, the first fair-launch platform built for Kaspa.",
    ],
    [
      "How to get in?",
      "Open the Moonbound launch page during the window and participate.",
    ],
    [
      "Is this financial advice?",
      "No. KONK is a meme token with no intrinsic value.",
    ],
  ] as const;

  return (
    <section id="faq" className="py-20">
      <Container>
        <SectionTitle eyebrow="FAQ" title="You ask, KONK answers" />
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {items.map(([q, a]) => (
            <Item key={q} q={q} a={a} />
          ))}
        </div>
      </Container>
    </section>
  );
}
