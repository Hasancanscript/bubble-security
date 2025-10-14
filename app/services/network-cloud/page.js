export const metadata = {
  title: "Netzwerk & Cloud Sicherheit | Bubble Security",
  description:
    "Zero Trust, sichere Konfigurationen in M365, Azure und AWS, Härtung, Segmentierung und laufende Kontrolle.",
};

export default function NetworkCloudPage() {
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
        <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900 }}>
          Netzwerk & Cloud Sicherheit
        </h2>
        <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
          Zero Trust, sauber konfigurierte Cloud-Dienste und gehärtete Netzwerke.
          Wir richten sicher ein und halten es einfach pflegbar.
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
          <li>Weniger Angriffsfläche durch Härtung und Segmentierung</li>
          <li>Sichere Grundkonfigurationen in M365, Azure und AWS</li>
          <li>Transparenz durch klare Richtlinien und Reports</li>
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
            title="Zero Trust Architektur"
            points={[
              "Identitaet als Perimeter, starke Authentisierung",
              "Least Privilege und saubere Rollen",
              "Explizit erlauben statt implizit vertrauen",
            ]}
          />
          <FeatureCard
            title="M365 & Azure Hardening"
            points={[
              "Secure Defaults und Baselines",
              "Conditional Access, MFA, App-Schutz",
              "Exchange/SharePoint/Teams Richtlinien",
            ]}
          />
          <FeatureCard
            title="AWS Baseline"
            points={[
              "IAM sauber aufsetzen und trennen",
              "Security Hub, GuardDuty, CloudTrail",
              "S3/VPC Best Practices und Verschluesselung",
            ]}
          />
          <FeatureCard
            title="Netzwerk Segmentierung"
            points={[
              "Trennung nach Zonen und Schutzbedarf",
              "Firewall Regeln auf das Noetigste",
              "VPN, Remotezugriff und Gast-Netz sauber",
            ]}
          />
          <FeatureCard
            title="Identity & Access"
            points={[
              "RBAC/ABAC, Gruppen und Rollen konsistent",
              "Privileged Access Workflows",
              "Rezertifizierung und saubere Aufloesung",
            ]}
          />
          <FeatureCard
            title="Kontinuierliche Kontrolle"
            points={[
              "Konfig-Drift erkennen und beheben",
              "Security Scorecards & Kurzreports",
              "Automatisierte Checks wo sinnvoll",
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
          <li>Ist-Stand aufnehmen: Identitaet, Cloud, Netzwerk</li>
          <li>Härtung und Basis-Richtlinien definieren</li>
          <li>Umsetzen und automatisieren, wo moeglich</li>
          <li>Uebergabe, Dokumentation und kurze Schulung</li>
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
          <summary style={summaryStyle}>Machen wir alles auf einmal</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Nein. Wir starten mit den groessten Hebeln: Identitaet, MFA,
            Zugriffsregeln, wichtigste Cloud-Dienste. Danach iterativ weiter.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Brauchen wir neue Tools</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Oft reichen vorhandene Lizenzen. Wir ergaenzen nur dort,
            wo es echten Mehrwert bringt.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Wie bleibt es dauerhaft sicher</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Mit Baselines, einfachen Prozessen und kleinen,
            regelmaessigen Kontrollen verhindern wir Drift.
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
          Willst du eine schnelle Cloud- und Netzwerk-Sichtung
        </h3>
        <p style={{ marginTop: 0, color: "var(--muted)" }}>
          Wir liefern ein kurzes Lagebild und einen klaren 30-Tage-Plan
          mit wenigen, wirksamen Schritten.
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
