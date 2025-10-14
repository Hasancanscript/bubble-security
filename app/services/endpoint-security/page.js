export const metadata = {
  title: "Endpunkt-Sicherheit | Bubble Security",
  description:
    "EDR, sichere Konfiguration, Patch-Management und klare Standards fuer Windows, macOS und Mobil.",
};

export default function EndpointSecurityPage() {
  return (
    <section className="section" style={{ borderRadius: 18, display: "grid", gap: 16 }}>
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
        <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900 }}>Endpunkt-Sicherheit</h2>
        <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
          Von EDR ueber Härtung bis Patch-Management: Wir machen Clients und Server
          alltagstauglich sicher – mit klaren Standards und wenig Overhead.
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
          <li>Weniger Angriffsfläche durch Standards und Härtung</li>
          <li>Fruehe Erkennung und Eindämmung mit EDR</li>
          <li>Hohe Basis-Sicherheit durch konsequente Updates</li>
        </ul>
      </article>

      {/* Leistungsbausteine */}
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
            title="EDR und Antivirus"
            points={[
              "Auswahl, Rollout und Policy-Design",
              "Alarm-Handling und Playbooks",
              "Isolierung und erste Hilfe bei Vorfall",
            ]}
          />
          <FeatureCard
            title="Härtung und Standards"
            points={[
              "Sichere Default-Konfigurationen",
              "Least-Privilege und App-Whitelisting",
              "Verschluesselung, Firewall, Logging",
            ]}
          />
          <FeatureCard
            title="Patch-Management"
            points={[
              "Automatisierung fuer OS und Software",
              "Pilotierung und Wartungsfenster",
              "Transparenz durch Berichte",
            ]}
          />
          <FeatureCard
            title="Mobile und macOS"
            points={[
              "MDM-Richtlinien und Compliance",
              "Schutz von Unternehmensdaten",
              "Sichere Nutzung unterwegs",
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
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>So gehen wir vor</h3>
        <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Inventar sichten und Basis-Schutz messen</li>
          <li>Standards definieren und schnell umsetzen</li>
          <li>EDR einführen und Alerts sinnvoll steuern</li>
          <li>Updates automatisieren und pruefen</li>
          <li>Regelmaessig pruefen und verbessern</li>
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
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>Haeufige Fragen</h3>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Brauchen wir zwingend EDR</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Wir empfehlen EDR ab kleiner Teamgroesse. Alternativ starten wir mit
            soliden AV-Policies und Logging und planen EDR als naechsten Schritt.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Wie aufwendig ist das Patchen</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Mit Automatisierung und kleinen Wartungsfenstern bleibt der Aufwand
            sehr ueberschaubar. Wichtige Systeme erhalten Pilotgruppen.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Unterstuetzt ihr Windows und macOS</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Ja. Wir liefern Policies und Prozesse fuer Windows, macOS und Mobil,
            inklusive MDM-Integration.
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
          Willst du Endpunkte schnell auf ein gutes Niveau bringen
        </h3>
        <p style={{ marginTop: 0, color: "var(--muted)" }}>
          Wir starten mit einem kurzen Check und setzen die wichtigsten Massnahmen zügig um.
        </p>
        <a href="/contact" className="btn btn-primary">Unverbindlich anfragen</a>
      </footer>
    </section>
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
