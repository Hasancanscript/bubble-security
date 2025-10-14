export const metadata = {
  title: "Lerneinheiten",
  description: "Lern Demo Inhalte. Keine echten Angebote.",
};

export default function ServicesLayout({ children }) {
  return (
    <main style={{ display: "grid", gap: 20 }}>
      <div
        style={{
          width: "100%",
          background: "rgba(245,158,11,0.10)",
          color: "rgb(252,211,77)",
          fontSize: 14,
          padding: "10px 16px",
          textAlign: "center",
          borderRadius: 12,
          border: "1px solid rgba(245,158,11,0.35)",
        }}
      >
        Hinweis Dieses Projekt ist eine Lern und Demo Webseite. Es gibt keine echten Angebote.
      </div>
      {children}
    </main>
  );
}
