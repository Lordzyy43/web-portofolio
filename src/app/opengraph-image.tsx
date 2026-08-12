import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
            "radial-gradient(circle at top left, rgba(34,211,238,0.28), transparent 30%), radial-gradient(circle at top right, rgba(59,130,246,0.26), transparent 26%), linear-gradient(180deg, #050816 0%, #0a1120 100%)",
          color: "#f8fbff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "680px",
            }}
          >
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
              Portfolio
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "72px",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {profile.name}
              </h1>

              <p
                style={{
                  margin: 0,
                  fontSize: "28px",
                  color: "#c7d2fe",
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
                color: "#d7e3ff",
                maxWidth: "620px",
              }}
            >
              Clean web and mobile case studies with a strong focus on product
              clarity, reusable UI, and thoughtful implementation.
            </p>
          </div>

          <div
            style={{
              width: "260px",
              borderRadius: "28px",
              border: "1px solid rgba(148,163,184,0.22)",
              background: "rgba(15,23,42,0.56)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ fontSize: "18px", color: "#94a3b8" }}>
              Focus areas
            </div>
            <div style={{ fontSize: "28px", fontWeight: 700 }}>Web</div>
            <div style={{ fontSize: "28px", fontWeight: 700 }}>Mobile</div>
            <div style={{ fontSize: "28px", fontWeight: 700 }}>Case Studies</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {["Next.js", "TypeScript", "Flutter", "Tailwind CSS"].map((item) => (
            <div
              key={item}
              style={{
                borderRadius: "999px",
                border: "1px solid rgba(103,232,249,0.25)",
                background: "rgba(15,23,42,0.4)",
                padding: "10px 16px",
                fontSize: "20px",
                color: "#d9f9ff",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
