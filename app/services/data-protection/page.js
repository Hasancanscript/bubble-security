export const metadata = {
  title: "Daten- und Inhaltsschutz | Bubble Security",
  description:
    "DLP, Verschluesselung und Richtlinien – damit sensible Informationen geschuetzt bleiben.",
};

export default function DataProtectionPage() {
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
          Daten- und Inhaltsschutz
        </h2>
        <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
          Schuetze vertrauliche Informationen mit klaren Richtlinien, Verschluesselung
          und DLP – pragmatisch und alltagstauglich.
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
          <li>Wissen, wo sensible Daten liegen und wer Zugriff hat</li>
          <li>Automatische Schutzmassnahmen statt nur Appelle</li>
          <li>Nachweisbare Compliance und weniger Leaks</li>
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
            title="Datenklassifizierung"
            points={[
              "Einfaches Schema: oeffentlich intern vertraulich streng",
              "Kennzeichnung in M365 Google Workspace u. a.",
              "Automatische Regeln fuer Freigaben und Versand",
            ]}
          />
          <FeatureCard
            title="DLP – Data Loss Prevention"
            points={[
              "Erkennen von sensiblen Inhalten wie IBAN Perso Kundendaten",
              "Blockieren oder Quarantaene bei Regelverstoessen",
              "Anwenderfreundliche Hinweise statt harter Stopps",
            ]}
          />
          <FeatureCard
            title="Verschluesselung und Rechte"
            points={[
              "Datei- und E-Mail-Verschluesselung wo sinnvoll",
              "Labels steuern Zugriffe automatisch",
              "Gastzugriffe zeitlich begrenzen und protokollieren",
            ]}
          />
          <FeatureCard
            title="Sichere Zusammenarbeit"
            points={[
              "Freigabe-Policies fuer Teams SharePoint Drive",
              "Externe Zusammenarbeit kontrolliert ermoeglichen",
              "Aufraeum- und Review-Workflows",
            ]}
          />
          <FeatureCard
            title="Audits und Nachweise"
            points={[
              "Protokolle und Reports fuer Revision und DSG",
              "Warnmeldungen bei untypischem Verhalten",
              "Dashboards fuer Management und IT",
            ]}
          />
          <FeatureCard
            title="Schulung & Starthilfen"
            points={[
              "Kompakte Leitfaeden und In-App-Tipps",
              "Team-Sessions mit typischen Praxissituationen",
              "Vorlagen fuer Richtlinien und Prozesse",
            ]}
          />
        </div>
      </article>

      {/* Praxisleitfaden */}
      <article
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 14,
          padding: 16,
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>Pragmatischer Fahrplan</h3>
        <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Datenarten und Schutzziele festlegen – einfaches Label-Schema</li>
          <li>Kritische Speicherorte identifizieren – Mail Cloud Freigaben</li>
          <li>Basisregeln aktivieren – Freigabe Limits Gastzugriffe Reviews</li>
          <li>DLP-Policies pilotieren – Hinweise statt Blocken wo moeglich</li>
          <li>Verschluesselung fuer hochsensible Bereiche aktivieren</li>
          <li>Schulung und Kurzleitfaeden fuer Teams bereitstellen</li>
          <li>Regelmaessige Reports und Nachjustierung</li>
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
          <summary style={summaryStyle}>Brauchen wir sofort komplexe DLP Loesungen</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Nein. Wir starten mit Labels und einfachen Regeln. DLP wird schrittweise
            eingefuehrt und so konfiguriert, dass es den Alltag unterstuetzt.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Wie verhindern wir Frust bei Mitarbeitenden</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Hinweise statt Blocken wo moeglich, sinnvolle Ausnahmen und klare Erklaerungen.
            Kurze Trainings mit Praxisbeispielen helfen spuerbar.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Funktioniert das auch mit externen Partnern</summary>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Ja. Gastzugriffe lassen sich zeitlich begrenzen und protokollieren. Freigaben
            koennen automatisch ueberprueft und bei Bedarf entzogen werden.
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
          Willst du sensible Daten gezielt und sichtbar schuetzen
        </h3>
        <p style={{ marginTop: 0, color: "var(--muted)" }}>
          Wir starten mit einem schlanken Setup, das sofort Wirkung zeigt – ohne
          Komplexitaetsfalle.
        </p>
        <a href="/contact" className="btn btn-primary">Unverbindlich anfragen</a>
      </footer>
    </section>
  );
}

/* Hilfskomponenten */

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
