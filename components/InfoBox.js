"use client";
export default function InfoBox({ variant = "hinweis", title, children }) {
  const s = styles[variant] || styles.hinweis;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "28px 1fr",
        gap: 12,
        alignItems: "start",
        borderRadius: 12,
        padding: 14,
        border: `1px solid ${s.border}`,
        background: s.bg,
        marginTop: 10,
      }}
      role="note"
      aria-label={variant}
    >
      <div
        aria-hidden
        style={{
          height: 28,
          width: 28,
          borderRadius: 8,
          display: "grid",
          placeItems: "center",
          color: s.fg,
          background: s.dot,
          fontWeight: 900,
          fontSize: 16,
        }}
      >
        {s.icon}
      </div>
      <div>
        {title && (
          <div style={{ fontWeight: 800, marginBottom: 6, color: s.fg }}>
            {title}
          </div>
        )}
        <div style={{ color: "var(--muted)" }}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  tipp: {
    fg: "rgb(209,250,229)",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.35)",
    dot: "rgba(16,185,129,0.20)",
    icon: "✓",
  },
  achtung: {
    fg: "rgb(254,226,226)",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.35)",
    dot: "rgba(239,68,68,0.20)",
    icon: "!",
  },
  beispiel: {
    fg: "rgb(219,234,254)",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.35)",
    dot: "rgba(59,130,246,0.20)",
    icon: "▶",
  },
  hinweis: {
    fg: "rgb(254,249,195)",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.35)",
    dot: "rgba(245,158,11,0.20)",
    icon: "i",
  },
  merkblatt: {
    fg: "rgb(236,252,203)",
    bg: "rgba(132,204,22,0.08)",
    border: "rgba(132,204,22,0.35)",
    dot: "rgba(132,204,22,0.20)",
    icon: "•",
  },
};
