"use client";

import InfoBox from "../../../components/InfoBox";
import MiniQuiz from "../../../components/MiniQuiz";

export default function Page() {
  // Fragen für das Mini-Quiz
  const questions = [
    {
      id: "q1",
      question:
        "Was reduziert Vorfälle am stärksten: Updates oder Desktop-Hintergrund?",
      type: "single",
      options: ["Updates", "Desktop-Hintergrund"],
      correctIndex: 0,
      explanation:
        "Aktuelle Systeme schliessen bekannte Lücken und senken das Risiko deutlich.",
    },
    {
      id: "q2",
      question:
        "Soll jeder Nutzer lokale Adminrechte haben – ja oder nein?",
      type: "boolean",
      correctIndex: 1, // Nein
      explanation:
        "Nur wenige Personen brauchen zeitlich begrenzte Adminrechte. Weniger Rechte bedeuten weniger Risiko.",
    },
    {
      id: "q3",
      question:
        "Was gehört zur Härtung: Verschlüsselung oder offenes Gastkonto?",
      type: "single",
      options: ["Verschlüsselung", "Offenes Gastkonto"],
      correctIndex: 0,
      explanation:
        "Verschlüsselung schützt Daten bei Verlust oder Diebstahl. Ein offenes Gastkonto erhöht das Risiko.",
    },
  ];

  return (
    <section className="section" style={{ borderRadius: 18 }}>
      <header style={{ textAlign: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 900 }}>
          Lektion 4 Endgeräte absichern
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          Sichere Grundeinstellungen, Patches, EDR oder Antivirus und weniger Adminrechte.
        </p>
      </header>

      <div style={{ display: "grid", gap: 14, maxWidth: 900, margin: "0 auto" }}>
        <Card title="Ziele">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Basiseinstellungen für Windows und macOS festlegen</li>
            <li>Patchstand regelmässig prüfen</li>
            <li>EDR oder Antivirus sauber verteilen</li>
          </ul>
        </Card>

        <Card title="Kernwissen in 60 Sekunden">
          <p style={{ margin: 0, color: "var(--muted)" }}>
            Die meisten Vorfälle lassen sich mit Updates und MFA stark reduzieren.
            Betriebssystem, Browser und Treiber aktuell halten.
            Lokale Adminrechte nur nach Bedarf und zeitlich begrenzt vergeben.
          </p>
        </Card>

        <InfoBox variant="tipp" title="Tipp: Schnelle Basis">
          Aktiviere automatische Updates für System und Browser. Nutze eine Bildschirmsperre
          mit kurzer Zeit und einen Passwort-Manager.
        </InfoBox>

        <InfoBox variant="achtung" title="Achtung: Unsichere Softwarequellen">
          Installiere Programme nur aus vertrauenswürdigen Quellen. Tools von
          unbekannten Webseiten können Malware enthalten.
        </InfoBox>

        <Card title="Praxis in 10 Minuten">
          <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Vollständige Festplattenverschlüsselung aktivieren</li>
            <li>Alle Browser und Treiber aktualisieren</li>
            <li>Lokale Adminrechte entziehen, wo nicht nötig</li>
          </ol>
        </Card>

        <Card title="Checkliste Gerätehärtung">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Bildschirmsperre mit kurzer Zeit</li>
            <li>Nur vertrauenswürdige Quellen für Software</li>
            <li>EDR oder Antivirus aktiv mit Alarmierung</li>
            <li>Automatische Updates eingeschaltet</li>
          </ul>
        </Card>

        <Card title="Mini-Quiz: 3 Fragen">
          <MiniQuiz questions={questions} />
        </Card>

        <Nav prev="/services/data-protection" next="/services/security-awareness" />
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <article
      style={{
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.08)",
        padding: 16,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
      }}
    >
      <h2 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 800 }}>{title}</h2>
      {children}
    </article>
  );
}

function Nav({ prev, next }) {
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
      <a href={prev} className="btn btn-ghost">Vorherige Lektion</a>
      <a href={next} className="btn btn-primary">Nächste Lektion</a>
    </div>
  );
}
