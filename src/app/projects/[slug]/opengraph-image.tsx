import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/data/projects";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type ProjectImageProps = {
  params: {
    slug: string;
  };
};

export default function Image({ params }: ProjectImageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(180deg, #050816 0%, #0b1224 100%)",
            color: "#f8fbff",
            fontFamily: "Inter, Arial, sans-serif",
            fontSize: "48px",
            fontWeight: 700,
          }}
        >
          Project case study
        </div>
      ),
      { ...size },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.24), transparent 30%), radial-gradient(circle at bottom right, rgba(59,130,246,0.2), transparent 24%), linear-gradient(180deg, #050816 0%, #0b1224 100%)",
          color: "#f8fbff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: "999px",
              border: "1px solid rgba(103,232,249,0.35)",
              background: "rgba(34,211,238,0.12)",
              padding: "10px 18px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#9be8ff",
            }}
          >
            {project.category} case study
          </div>

          <h1
            style={{
              margin: 0,
              maxWidth: "860px",
              fontSize: "68px",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "820px",
              fontSize: "28px",
              lineHeight: 1.4,
              color: "#d7e3ff",
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
            <div style={{ fontSize: "18px", color: "#94a3b8" }}>Focus</div>
            <div style={{ fontSize: "24px", lineHeight: 1.45, color: "#e6eefc" }}>
              {project.context ?? project.description}
            </div>
          </div>

          <div
            style={{
              minWidth: "280px",
              borderRadius: "28px",
              border: "1px solid rgba(148,163,184,0.2)",
              background: "rgba(15,23,42,0.56)",
              padding: "22px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ fontSize: "18px", color: "#94a3b8" }}>Tech stack</div>
            <div
              style={{
                marginTop: "14px",
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {project.tech.slice(0, 4).map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "999px",
                    border: "1px solid rgba(103,232,249,0.25)",
                    background: "rgba(15,23,42,0.4)",
                    padding: "8px 14px",
                    fontSize: "18px",
                    color: "#d9f9ff",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
