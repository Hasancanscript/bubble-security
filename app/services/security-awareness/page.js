export const metadata = {
  title: "Security Awareness | Bubble Security",
  description:
    "Trainings Phishing Simulationen und klare Regeln. Verhalten staerken Risiken senken.",
};

export default function SecurityAwarenessPage() {
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
          Security Awareness
        </h2>
        <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
          Wir machen Sicherheit alltaeglich und greifbar. Kurze Lernhaeppchen
          ueben mit echten Beispielen und klare Handlungswege.
        </p>
      </header>

      {/* Mehrwert */}
      <article style={cardStyle}>
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>Dein Mehrwert</h3>
        <ul style={ulStyle}>
          <li>Weniger Klicks auf Phishing dafuer mehr Meldungen</li>
          <li>Klare Ablaufe im Team wer macht was</li>
          <li>Messbar besser dank kurzen regelmaessigen Uebungen</li>
        </ul>
      </article>

      {/* Bausteine */}
      <article style={{ ...cardStyle, display: "grid", gap: 12 }}>
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>Leistungsbausteine</h3>

        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          <FeatureCard
            title="Kickoff und Basisregeln"
            points={[
              "Kurzworkshop mit Beispielen aus eurem Alltag",
              "Einfache Do und Dont Regeln als Poster und Karte",
              "Meldeschaltflaeche fuer verdachtige Mails",
            ]}
          />
          <FeatureCard
            title="Phishing Simulation"
            points={[
              "Realistische Kampagnen auf eure Rollen zugeschnitten",
              "Sofort Feedback und Mini Lernhaeppchen",
              "Dashboard mit Quoten und Trends",
            ]}
          />
          <FeatureCard
            title="Micro Learnings"
            points={[
              "12 bis 15 kurze Module im Jahr",
              "Video Quiz Interaktiv in 5 bis 8 Minuten",
              "Mehrsprachig und mobil geeignet",
            ]}
          />
          <FeatureCard
            title="Rollenbezogene Vertiefung"
            points={[
              "Finance HR IT und Management spezifische Risiken",
              "Sichere Zusammenarbeit mit Externen",
              "Schutz sensibler Daten und Umgang mit Vorfaellen",
            ]}
          />
          <FeatureCard
            title="Security Champions"
            points={[
              "Multiplikatoren im Team aufbauen",
              "Monatliche Kurzagenda mit Materialien",
              "Austausch und Best Practices",
            ]}
          />
          <FeatureCard
            title="Bericht und Verbesserungen"
            points={[
              "Quartalsbericht mit Kennzahlen und Erkenntnissen",
              "Empfehlungen fuer naechste Schritte",
              "Vergleich ueber Teams Standorte und Zeit",
            ]}
          />
        </div>
      </article>

      {/* Ablauf */}
      <article style={cardStyle}>
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>So gehen wir vor</h3>
        <ol style={olStyle}>
          <li>Ziele und Ausgangslage klaeren Inhalte priorisieren</li>
          <li>Kurzworkshop und Basisregeln ausrollen</li>
          <li>Phishing Simulation und Micro Learnings starten</li>
          <li>Ergebnisse besprechen Massnahmen ableiten</li>
          <li>Regelmaessig auffrischen und verbessern</li>
        </ol>
      </article>

      {/* FAQ */}
      <article style={{ ...cardStyle, display: "grid", gap: 10 }}>
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>Haeufige Fragen</h3>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Wie viel Zeit braucht das pro Person</summary>
          <p style={pMuted}>
            Etwa 20 bis 30 Minuten pro Monat. Kurze Formate lassen sich gut in
            den Arbeitsalltag integrieren.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Wird niemand an den Pranger gestellt</summary>
          <p style={pMuted}>
            Nein. Wir arbeiten positiv und anonymisiert. Ziel ist Lernen nicht
            Blossstellen.
          </p>
        </details>

        <details style={detailsStyle}>
          <summary style={summaryStyle}>Koennen wir eigene Inhalte einbringen</summary>
          <p style={pMuted}>
            Ja. Interne Richtlinien Prozesse und Beispiele koennen wir leicht
            integrieren.
          </p>
        </details>
      </article>

      {/* CTA */}
      <footer className="section" style={ctaStyle}>
        <h3 style={{ marginTop: 0, fontWeight: 900 }}>
          Willst du Verhalten messbar verbessern
        </h3>
        <p style={pMuted}>
          Wir starten pragmatisch mit Kickoff Phishing Simulation und Micro
          Learnings. Nach drei Monaten siehst du klare Effekte.
        </p>
        <a href="/contact" className="btn btn-primary">Unverbindlich anfragen</a>
      </footer>
    </section>
  );
}

/* Helpers */
function FeatureCard({ title, points }) {
  return (
    <div style={featureCardStyle}>
      <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
      <ul style={ulStyle}>
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

const cardStyle = {
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 14,
  padding: 16,
  background: "rgba(255,255,255,0.03)",
};

const featureCardStyle = {
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 12,
  padding: 14,
  background: "#111",
};

const ulStyle = { margin: 0, paddingLeft: 18, lineHeight: 1.6 };
const olStyle = { margin: 0, paddingLeft: 18, lineHeight: 1.8 };
const detailsStyle = {
  background: "#111",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: 12,
};
const summaryStyle = { cursor: "pointer", fontWeight: 700 };
const pMuted = { marginTop: 8, color: "var(--muted)" };
const ctaStyle = {
  borderRadius: 16,
  textAlign: "center",
  border: "1px solid rgba(239,68,68,0.35)",
  background: "linear-gradient(135deg, rgba(239,68,68,0.14), rgba(239,68,68,0.06))",
};
