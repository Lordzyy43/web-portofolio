import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/data/projects";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type ProjectImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Image({ params }: ProjectImageProps) {
  // FIX: Menggunakan await untuk params di Next.js 15
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Tampilan OG Image jika project tidak ditemukan (Fallback)
  if (!project) {
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at center, #18181b 0%, #09090b 80%)",
          color: "#fafafa",
          fontFamily: "Inter, Arial, sans-serif",
          fontSize: "48px",
          fontWeight: 700,
        }}
      >
        Project Case Study
      </div>,
      { ...size },
    );
  }

  // Tampilan utama OG Image untuk detail Project
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
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
        {/* Badge Kategori dengan Sentuhan Amber */}
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            borderRadius: "999px",
            border: "1px solid rgba(251, 191, 36, 0.3)", // amber border
            background: "rgba(251, 191, 36, 0.1)", // amber glow
            padding: "8px 20px",
            fontSize: "20px",
            fontWeight: 600,
            color: "#fcd34d", // amber-300
            letterSpacing: "0.02em",
            textTransform: "capitalize",
          }}
        >
          {project.category} case study
        </div>

        <h1
          style={{
            margin: 0,
            maxWidth: "860px",
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#ffffff",
          }}
        >
          {project.title}
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: "820px",
            fontSize: "32px",
            lineHeight: 1.4,
            color: "#a1a1aa", // zinc-400
            fontWeight: 500,
          }}
        >
          {project.summary}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "24px",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "640px",
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
            Focus
          </div>
          <div style={{ fontSize: "24px", lineHeight: 1.45, color: "#d4d4d8" }}>
            {/* Memotong context jika terlalu panjang agar OG image tidak rusak */}
            {(project.context ?? project.description).slice(0, 140)}...
          </div>
        </div>

        {/* Tech Stack Card (Bento style) */}
        <div
          style={{
            minWidth: "280px",
            borderRadius: "20px",
            border: "1px solid #27272a", // zinc-800
            background: "rgba(24,24,27,0.8)", // zinc-900 transparan
            padding: "24px",
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
            Tech stack
          </div>
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {project.tech.slice(0, 4).map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: "8px",
                  border: "1px solid #27272a", // zinc-800
                  background: "#09090b", // zinc-950
                  padding: "8px 16px",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#a1a1aa", // zinc-400
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
