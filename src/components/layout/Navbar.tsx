"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navLinks";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setIsHidden(true);
      setIsOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  if (!isMounted) return null;

  // Memisahkan navLinks menjadi kiri dan kanan agar logo bisa di tengah persis
  // Asumsi navLinks ada 4 (Home, About, Projects, Contact)
  const midIndex = Math.ceil(navLinks.length / 2);
  const leftLinks = navLinks.slice(0, midIndex);
  const rightLinks = navLinks.slice(midIndex);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? -100 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex w-full max-w-5xl justify-center px-4 md:top-6"
    >
      {/* 
        DESKTOP NAVBAR: Logo Center Layout
      */}
      <nav className="hidden w-fit items-center justify-between rounded-full border border-zinc-800/60 bg-zinc-950/60 px-2 py-2 text-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:flex">
        {/* Nav Kiri */}
        <div className="flex items-center gap-2 pr-6">
          {leftLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-medium transition-colors"
              >
                <span
                  className={cn(
                    "relative z-10",
                    isActive
                      ? "text-zinc-50"
                      : "text-zinc-400 hover:text-zinc-200",
                  )}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 z-0 rounded-full bg-zinc-800/80"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Logo (Tengah) */}
        <Link
          href="/"
          className="relative z-10 mx-2 flex items-center justify-center text-lg font-extrabold tracking-tight text-zinc-50 transition-transform hover:scale-105"
        >
          {profile.name}
          <span className="text-zinc-500">.</span>
        </Link>

        {/* Nav Kanan */}
        <div className="flex items-center gap-2 pl-6">
          {rightLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-medium transition-colors"
              >
                <span
                  className={cn(
                    "relative z-10",
                    isActive
                      ? "text-zinc-50"
                      : "text-zinc-400 hover:text-zinc-200",
                  )}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 z-0 rounded-full bg-zinc-800/80"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* 
        MOBILE NAVBAR: Tetap sama, karena di HP logo memang harus di kiri/tengah dan hamburger di kanan
      */}
      <div className="flex w-full flex-col md:hidden">
        <nav className="flex w-full items-center justify-between rounded-full border border-zinc-800/60 bg-zinc-950/70 px-4 py-2 shadow-2xl backdrop-blur-xl">
          <Link
            href="/"
            className="pl-2 text-lg font-bold tracking-tight text-zinc-50"
            onClick={() => setIsOpen(false)}
          >
            {profile.name}
            <span className="text-zinc-500">.</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/50 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-50"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 origin-top overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-950/90 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-sm font-medium transition-all active:scale-95",
                        isActive
                          ? "bg-zinc-800/80 text-zinc-50"
                          : "text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
