import { ImageResponse } from "next/og";

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
        // Background konsisten dengan halaman utama (Zinc palette)
        background:
          "radial-gradient(circle at center, #18181b 0%, #09090b 80%)",
        color: "#fafafa",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      {/* Dekorasi Grid Lines Halus untuk konsistensi branding */}
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
          flexDirection: "column",
          gap: "16px",
          zIndex: 1,
        }}
      >
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
          Projects
        </div>

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
          Selected work
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: "760px",
            fontSize: "32px",
            lineHeight: 1.4,
            color: "#a1a1aa", // zinc-400
            fontWeight: 500,
          }}
        >
          Case studies that show the thinking behind each build, not just the
          finished interface.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          zIndex: 1,
        }}
      >
        {[
          ["Aerobook", "Mobile booking experience"],
          ["Portfolio", "Design-led personal site"],
          ["Task Dashboard", "Planned product concept"],
        ].map(([title, subtitle]) => (
          <div
            key={title}
            style={{
              borderRadius: "20px", // Sudut yang lebih elegan dibanding 28px
              border: "1px solid #27272a", // zinc-800
              background: "rgba(24,24,27,0.8)", // zinc-900 transparan
              padding: "28px",
              boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{ fontSize: "28px", fontWeight: 700, color: "#fafafa" }}
            >
              {title}
            </div>
            <div
              style={{ fontSize: "20px", color: "#a1a1aa", fontWeight: 500 }}
            >
              {subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
