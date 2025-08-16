import React from "react";
import { Container } from "./Shared";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/40">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-bold">$KONK</span>
        <nav className="flex items-center gap-5 text-white/70 text-sm">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#how" className="hover:text-white">
            How to Buy
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>
        <p className="text-white/60 text-xs">
          © {new Date().getFullYear()} KONK.
        </p>
      </Container>
    </footer>
  );
}
