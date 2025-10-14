export default function ThreatDetectionPage() {
  return (
    <>
      {/* Hero */}
      <header
        style={{
          border: "1px solid rgba(239,68,68,0.35)",
          borderRadius: 16,
          padding: 18,
          background:
            "linear-gradient(135deg, rgba(239,68,68,0.12), rgba(239,68,68,0.06))",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900 }}>
          Bedrohungserkennung und Reaktion
        </h2>
        <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
          Wir erkennen Angriffe früh und reagieren strukturiert. Von der ersten
          Alarmierung bis zur Eindämmung.
        </p>
      </header>

      {/* Nutzen */}
      <article
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 14,
          padding: 16,
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>Dein Mehrwert</h3>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li>Frühe Erkennung statt späte Schadensbegrenzung</li>
          <li>Klare Schritte bei Vorfall und geringere Ausfallzeit</li>
          <li>Transparente Lage und verständliche Reports</li>
        </ul>
      </article>

      {/* Leistungen */}
      <article
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 14,
          padding: 16,
          background: "rgba(255,255,255,0.03)",
          display: "grid",
          gap: 12,
        }}
      >
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>Leistungsbausteine</h3>

        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          <FeatureCard
            title="Monitoring rund um die Uhr"
            points={[
              "Log- und Event-Sammlung aus wichtigen Systemen",
              "Erkennung von Anomalien und bekannten Mustern",
              "Alarme mit Kontext statt Rauschen",
            ]}
          />
          <FeatureCard
            title="Alarmierung und Ersthilfe"
            points={[
              "Weg vom Hinweis zum Ticket ist kurz",
              "Erste Einordnung und Handlungsempfehlung",
              "Unterstützung beim Sammeln von Fakten",
            ]}
          />
          <FeatureCard
            title="Incident Response"
            points={[
              "Eindämmen, Ursachen finden, beheben",
              "Forensik so weit wie nötig und sinnvoll",
              "Lernpunkte und Abschlussbericht",
            ]}
          />
          <FeatureCard
            title="Harte Fakten und Übung"
            points={[
              "Runbooks für typische Lagen",
              "Tabletop Übungen im Team",
              "Kennzahlen und Reifegrad Übersicht",
            ]}
          />
        </div>
      </article>

      {/* Vorgehen */}
      <article
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 14,
          padding: 16,
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>So laufen Einsätze</h3>
        <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Signal kommt rein, wir prüfen Quelle und Relevanz</li>
          <li>Eindämmung starten, Zugriffe trennen, Risiken senken</li>
          <li>Analyse, Spuren sichern, Ursache finden</li>
          <li>Beheben, Wiederanlauf planen und umsetzen</li>
          <li>Lernen, Massnahmen und kurze Schulung im Team</li>
        </ol>
      </article>

      {/* FAQ */}
      <article
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 14,
          padding: 16,
          background: "rgba(255,255,255,0.03)",
          display: "grid",
          gap: 10,
        }}
      >
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>Häufige Fragen</h3>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Welche Systeme binden wir an</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Start mit Identität, Mail, Endgeräte, Netzwerk und Cloud. Wir
            priorisieren nach Risiko und Aufwand.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Wie schnell ist Hilfe verfügbar</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Wir bieten Bereitschaft nach Vereinbarung. In der Regel erhalten
            Kunden noch am gleichen Tag Unterstützung.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Braucht es grosse Technik</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Nein, wir nutzen vorhandene Mittel und ergänzen nur, was wirklich
            fehlt. Fokus auf einfache, stabile Lösungen.
          </p>
        </details>
      </article>

      {/* CTA */}
      <footer
        className="section"
        style={{
          borderRadius: 16,
          textAlign: "center",
          border: "1px solid rgba(239,68,68,0.35)",
          background:
            "linear-gradient(135deg, rgba(239,68,68,0.14), rgba(239,68,68,0.06))",
        }}
      >
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>
          Willst du ein kurzes Lagebild für dein Team
        </h3>
        <p style={{ marginTop: 0, color: "var(--muted)" }}>
          Wir starten mit einem kompakten Check und einem klaren Plan für die
          ersten Schritte.
        </p>
        <a href="/contact" className="btn btn-primary">
          Unverbindlich anfragen
        </a>
      </footer>
    </>
  );
}

function FeatureCard({ title, points }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 12,
        padding: 14,
        background: "#111",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

const detailsStyle = {
  background: "#111",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: 12,
};

const summaryStyle = {
  cursor: "pointer",
  fontWeight: 700,
};
