import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        // Background menggunakan palet Zinc (#09090b) dengan pendaran cahaya lembut di tengah
        background:
          "radial-gradient(circle at center, #18181b 0%, #09090b 80%)",
        color: "#fafafa",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      {/* Dekorasi Grid Lines Halus (Opsional, memberi tekstur) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
          zIndex: -1,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "680px",
          }}
        >
          {/* Badge Portfolio Minimalis */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: "999px",
              border: "1px solid #3f3f46", // zinc-700
              background: "#18181b", // zinc-900
              padding: "8px 20px",
              fontSize: "20px",
              fontWeight: 600,
              color: "#e4e4e7", // zinc-200
              letterSpacing: "0.02em",
            }}
          >
            Portfolio
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "76px",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "#ffffff",
              }}
            >
              {profile.name}
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "32px",
                color: "#a1a1aa", // zinc-400
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              {profile.role} based in {profile.location}
            </p>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "24px",
              lineHeight: 1.5,
              color: "#d4d4d8", // zinc-300
              maxWidth: "620px",
              marginTop: "12px",
            }}
          >
            Clean web and mobile case studies with a strong focus on product
            clarity, reusable UI, and thoughtful implementation.
          </p>
        </div>

        {/* Card Focus Area - Gaya Bento Minimalis */}
        <div
          style={{
            width: "280px",
            borderRadius: "24px",
            border: "1px solid #27272a", // zinc-800
            background: "rgba(24,24,27,0.8)", // zinc-900 transparan
            padding: "32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              color: "#a1a1aa",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: 600,
            }}
          >
            Focus areas
          </div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#fafafa" }}>
            Web
          </div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#fafafa" }}>
            Mobile
          </div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#fafafa" }}>
            Case Studies
          </div>
        </div>
      </div>

      {/* Skill Pills Bawah */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {["Next.js", "TypeScript", "Flutter", "Tailwind CSS"].map((item) => (
          <div
            key={item}
            style={{
              borderRadius: "8px", // Sudut yang lebih tegas (modern) ketimbang bulat penuh
              border: "1px solid #27272a", // zinc-800
              background: "#09090b", // zinc-950
              padding: "10px 18px",
              fontSize: "20px",
              fontWeight: 500,
              color: "#a1a1aa", // zinc-400
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
