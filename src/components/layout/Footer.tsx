import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { MapPin } from "lucide-react"; // Ikon lokasi dari lucide

export function Footer() {
  // Mengambil tahun secara dinamis agar kamu tidak perlu mengubahnya manual tiap tahun
  const currentYear = new Date().getFullYear();

  return (
    // overflow-hidden penting di sini agar teks raksasa di background tidak merusak layout
    <footer className="relative mt-20 overflow-hidden border-t border-zinc-900 bg-transparent py-12 md:py-16">
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-end">
          {/* Kolom Kiri: Status & Copyright */}
          <div className="flex flex-col items-center gap-6 md:items-start">
            {/* Pulsing Availability Badge */}
            <div className="flex w-fit items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/50 px-4 py-1.5 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </div>

            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-zinc-400">
                © {currentYear} {profile.name}. All rights reserved.
              </p>
              <p className="mt-1.5 flex items-center justify-center gap-2 text-xs font-medium text-zinc-600 md:justify-start">
                Crafted with Next.js
                <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                Tailwind CSS
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Socials & Location */}
          <div className="flex flex-col items-center gap-5 md:items-end">
            <SocialLinks align="center" />

            {/* Lokasi dengan ikon kecil untuk sentuhan personal */}
            <p className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </p>
          </div>
        </div>
      </Container>

      {/* 
        Watermark Background Text (Elemen "Unique")
        Akan merender nama kamu dalam ukuran raksasa di bagian bawah layar.
        Warnanya memudar ke transparan agar tidak mengganggu teks utama.
      */}
      <div className="pointer-events-none absolute -bottom-6 left-1/2 w-full -translate-x-1/2 select-none text-center md:-bottom-10">
        <h2 className="bg-gradient-to-b from-zinc-800/20 to-transparent bg-clip-text text-[15vw] font-black tracking-tighter text-transparent opacity-80 md:text-[12vw]">
          {profile.name.toUpperCase()}
        </h2>
      </div>
    </footer>
  );
}
