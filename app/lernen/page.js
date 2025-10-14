export const metadata = { title: "Lernen", description: "Übersicht aller Lerneinheiten" };

export default function LernenPage() {
  const items = [
    { id: "lektion-1", title: "Lektion 1 Bedrohungen erkennen", href: "/services/threat-detection" },
    { id: "lektion-2", title: "Lektion 2 Netzwerk und Cloud sicher", href: "/services/network-cloud" },
    { id: "lektion-3", title: "Lektion 3 Daten und Inhalte schützen", href: "/services/data-protection" },
    { id: "lektion-4", title: "Lektion 4 Endgeräte absichern", href: "/services/endpoint-security" },
    { id: "lektion-5", title: "Lektion 5 Security Awareness", href: "/services/security-awareness" },
  ];

  return (
    <main className="section" style={{ borderRadius: 18 }}>
      <h1 style={{ marginTop: 0, fontSize: 32, fontWeight: 900, textAlign: "center" }}>
        Unsere Lerneinheiten
      </h1>
      <p style={{ color: "var(--muted)", textAlign: "center", marginTop: 6 }}>
        Kurz und klar. Jede Lektion in 10 bis 15 Minuten.
      </p>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          marginTop: 18,
        }}
      >
        {items.map((it) => (
          <a
            key={it.id}
            id={it.id}
            href={it.href}
            style={{
              borderRadius: 16,
              padding: 16,
              textDecoration: "none",
              color: "inherit",
              border: "1px solid rgba(255,255,255,0.06)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
            }}
          >
            <h2 style={{ margin: "0 0 6px", fontSize: 20, fontWeight: 800 }}>{it.title}</h2>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Klicke und lerne in wenigen Minuten die wichtigsten Schritte.
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
