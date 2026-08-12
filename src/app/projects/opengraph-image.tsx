import { ImageResponse } from "next/og";

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
            "radial-gradient(circle at top left, rgba(34,211,238,0.24), transparent 30%), radial-gradient(circle at bottom right, rgba(168,85,247,0.2), transparent 24%), linear-gradient(180deg, #050816 0%, #0b1224 100%)",
          color: "#f8fbff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
            Projects
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "72px",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            Selected work
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "760px",
              fontSize: "28px",
              lineHeight: 1.4,
              color: "#d7e3ff",
            }}
          >
            Case studies that show the thinking behind each build, not just the
            finished interface.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
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
                borderRadius: "28px",
                border: "1px solid rgba(148,163,184,0.2)",
                background: "rgba(15,23,42,0.56)",
                padding: "22px",
                boxShadow: "0 30px 80px rgba(0,0,0,0.2)",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ fontSize: "26px", fontWeight: 700 }}>{title}</div>
              <div style={{ fontSize: "18px", color: "#b8c5e5" }}>
                {subtitle}
              </div>
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
