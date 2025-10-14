"use client";

import InfoBox from "../../../components/InfoBox";
import MiniQuiz from "../../../components/MiniQuiz";

export default function Page() {
  // Fragen für das Mini-Quiz
  const questions = [
    {
      id: "q1",
      question:
        "Was bedeutet wenig Rechte: nur was nötig ist oder alles erlauben?",
      type: "single",
      options: ["Nur was nötig ist", "Alles erlauben"],
      correctIndex: 0,
      explanation:
        "Gib nur die Rechte, die wirklich für die Aufgabe gebraucht werden.",
    },
    {
      id: "q2",
      question: "Soll Basic Auth aktiv bleiben – ja oder nein?",
      type: "boolean",
      correctIndex: 1, // Nein
      explanation:
        "Nein. Alte Anmeldeverfahren wie Basic Auth abschalten und moderne Methoden nutzen.",
    },
    {
      id: "q3",
      question:
        "Welche Faktoren prüft bedingter Zugriff: Identität, Gerät, Ort oder Lieblingsfarbe?",
      type: "single",
      options: ["Identität, Gerät, Ort", "Lieblingsfarbe"],
      correctIndex: 0,
      explanation:
        "Bedingter Zugriff bewertet Identität, Gerätezustand und Ort.",
    },
  ];

  return (
    <section className="section" style={{ borderRadius: 18 }}>
      <header style={{ textAlign: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 900 }}>
          Lektion 2 Netzwerk und Cloud sicher
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          Baue eine einfache Sicherheitsbasis mit MFA, wenig Rechten und
          kontrolliertem Zugang.
        </p>
      </header>

      <div style={{ display: "grid", gap: 14, maxWidth: 900, margin: "0 auto" }}>
        <Card title="Ziele">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Prinzip „Wenig Rechte“ verstehen und anwenden</li>
            <li>MFA für Admin- und Dienstkonten aktivieren</li>
            <li>Zugriffe von extern prüfen und begrenzen</li>
          </ul>
        </Card>

        <Card title="Kernwissen in 60 Sekunden">
          <p style={{ margin: 0, color: "var(--muted)" }}>
            Zero Trust bedeutet: Jede Anfrage wird geprüft. Wichtige Faktoren sind
            Identität, Gerät und Ort. Alte Anmeldungen wie Basic Auth abschalten.
            Adminrechte trennen und nur zeitlich vergeben. Bedingter Zugriff hilft,
            riskante Logins zu blockieren.
          </p>
        </Card>

        <InfoBox variant="tipp" title="Tipp: Schnelle Basis">
          MFA überall einschalten, getrennte Adminkonten nutzen und Protokollierung
          aktivieren. Das bringt sofort viel Schutz.
        </InfoBox>

        <InfoBox variant="beispiel" title="Beispiel: Offener Port">
          Ein offener RDP-Port am Router wird missbraucht. Lösung: Fernzugriff
          entfernen oder nur über ein sicheres Gateway mit MFA erlauben.
        </InfoBox>

        <Card title="Praxis in 10 Minuten">
          <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>MFA für alle Adminkonten einschalten</li>
            <li>
              Liste globaler Berechtigungen exportieren und unnötige Rechte entfernen
            </li>
            <li>Offene Ports am Router prüfen und nur das Nötige erlauben</li>
          </ol>
        </Card>

        <Card title="Checkliste Baseline">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Keine gemeinsamen Adminkonten</li>
            <li>Eigene Dienstidentität pro System</li>
            <li>Protokollierung aktiv bei Anmeldungen und Adminaktionen</li>
            <li>Konfig-Backup von Router und Cloud anlegen</li>
          </ul>
        </Card>

        <Card title="Mini-Quiz: 3 Fragen">
          <MiniQuiz questions={questions} />
        </Card>

        <Nav prev="/services/threat-detection" next="/services/data-protection" />
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
