"use client";

import { useState } from "react";
import { navLinks } from "@/data/navLinks";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a
          href="/"
          className="text-lg font-bold text-white"
          onClick={closeMenu}
        >
          {profile.name}
          <span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="text-xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
