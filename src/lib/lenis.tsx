"use client";

import { ReactLenis as Lenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export function ReactLenis({ children }: { children: ReactNode }) {
  return (
    <Lenis
      root
      options={{
        lerp: 0.08, // Tingkat kehalusan (0.05 - 0.1 adalah sweet spot)
        duration: 1.2, // Panjang momentum inersia
        smoothWheel: true, // Aktifkan smooth scroll untuk mouse wheel
        wheelMultiplier: 1, // Kecepatan scroll standar mouse
        touchMultiplier: 2, // Dipercepat untuk layar sentuh/trackpad agar tidak terasa "berat"
        infinite: false, // Ubah true jika kamu ingin web scroll looping terus menerus
      }}
    >
      {children}
    </Lenis>
  );
}
