"use client";

import InfoBox from "../../../components/InfoBox";
import MiniQuiz from "../../../components/MiniQuiz"; // falls deine Datei MiniQuiz.js heisst -> "../../../components/MiniQuiz"

export default function Page() {
  // Fragen für das Mini-Quiz
  const questions = [
    {
      id: "q1",
      question:
        "Wozu dienen Labels: Nutzung und Schutz festlegen oder nur Farben ändern?",
      type: "single",
      options: ["Nutzung und Schutz festlegen", "Nur Farben ändern"],
      correctIndex: 0,
      explanation:
        "Labels legen Regeln fest, zum Beispiel wer lesen darf, ob Teilen erlaubt ist oder ob Verschlüsselung nötig ist.",
    },
    {
      id: "q2",
      question: "Ist ein Backup ohne Test zuverlässig – ja oder nein?",
      type: "boolean",
      correctIndex: 1, // Nein
      explanation:
        "Nein. Backups sind nur dann wertvoll, wenn die Wiederherstellung regelmässig getestet wird.",
    },
    {
      id: "q3",
      question:
        "Welche Daten gelten als sensibel: Kundenliste oder Wetterdaten?",
      type: "single",
      options: ["Kundenliste", "Wetterdaten"],
      correctIndex: 0,
      explanation:
        "Kundenlisten enthalten persönliche oder geschäftliche Informationen und sind sensibel.",
    },
  ];

  return (
    <section className="section" style={{ borderRadius: 18 }}>
      <header style={{ textAlign: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 900 }}>
          Lektion 3 Daten und Inhalte schützen
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          Verstehe DLP, Verschlüsselung, Labels und sichere Freigaben in wenigen Schritten.
        </p>
      </header>

      <div style={{ display: "grid", gap: 14, maxWidth: 900, margin: "0 auto" }}>
        <Card title="Ziele">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Sensible Daten erkennen und einteilen</li>
            <li>Schutzlabels sinnvoll einsetzen</li>
            <li>Einen einfachen Backup-Plan aufsetzen</li>
          </ul>
        </Card>

        <Card title="Kernwissen in 60 Sekunden">
          <p style={{ margin: 0, color: "var(--muted)" }}>
            Sensible Daten sind zum Beispiel Kundenlisten, Verträge und Gesundheitsdaten.
            Labels legen fest, wie Inhalte genutzt und geteilt werden.
            Verschlüsselung schützt Geräte und Dateien vor Einsicht.
          </p>
        </Card>

        {/* Infokästen */}
        <InfoBox variant="tipp" title="Tipp: Schnelle Basis">
          Nutze zwei einfache Labels: „intern“ und „vertraulich“. Teile standardmässig nur mit
          einzelnen Personen und setze bei externen Freigaben ein Ablaufdatum.
        </InfoBox>

        <InfoBox variant="beispiel" title="Beispiel: Falsche Freigabe">
          Eine Datei wurde „öffentlich“ geteilt. Lösung: Teilen beenden, neuen Link nur für
          bestimmte Personen setzen und optional „Nur Lesen“ mit Ablaufdatum aktivieren.
        </InfoBox>

        <Card title="Praxis in 10 Minuten">
          <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Zwei Schutzlabels anlegen: „vertraulich“ und „intern“</li>
            <li>DLP-Regel für Kreditkartenmuster testen</li>
            <li>Eine Wiederherstellung aus dem Backup durchführen</li>
          </ol>
        </Card>

        <Card title="Checkliste Basisschutz">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Volle Festplattenverschlüsselung aktiv</li>
            <li>Freigaben nur mit gezielten Personen</li>
            <li>Teilen mit Ablaufdatum und ohne öffentlich</li>
            <li>Backup nach dem 3-2-1-Prinzip speichern</li>
          </ul>
        </Card>

        <Card title="Mini-Quiz: 3 Fragen">
          {/* Interaktives Quiz */}
          <MiniQuiz questions={questions} />
        </Card>

        <Nav prev="/services/network-cloud" next="/services/endpoint-security" />
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
