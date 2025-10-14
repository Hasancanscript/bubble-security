"use client";

import InfoBox from "../../../components/InfoBox";
import MiniQuiz from "../../../components/MiniQuiz";

export default function Page() {
  // Fragen für das Mini-Quiz
  const questions = [
    {
      id: "q1",
      question:
        "Welches Signal ist typisch für Phishing: Druck, ungewohnter Absender oder beides?",
      type: "single",
      options: ["Druck", "Ungewohnter Absender", "Beides"],
      correctIndex: 2,
      explanation:
        "Phishing kombiniert oft Zeitdruck mit einer merkwürdigen Absenderadresse.",
    },
    {
      id: "q2",
      question:
        "Soll man bei Verdacht das Gerät sofort formatieren – ja oder nein?",
      type: "boolean",
      correctIndex: 1, // Nein
      explanation:
        "Nein. Erst trennen, sichern und melden – sonst gehen Spuren verloren.",
    },
    {
      id: "q3",
      question:
        "Was prüfst du zuerst bei einem Link: die Domain oder die Farbe des Buttons?",
      type: "single",
      options: ["Die Domain", "Die Farbe des Buttons"],
      correctIndex: 0,
      explanation: "Die Domain zeigt, wohin der Link wirklich führt.",
    },
  ];

  return (
    <section className="section" style={{ borderRadius: 18 }}>
      <header style={{ textAlign: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 900 }}>
          Lektion 1 Bedrohungen erkennen
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          Erkenne Phishing, Malware und Kontoübernahmen. Lerne, was du in den
          ersten 15 Minuten tun sollst.
        </p>
      </header>

      <div style={{ display: "grid", gap: 14, maxWidth: 900, margin: "0 auto" }}>
        <Card title="Ziele">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Phishing-Merkmale sicher erkennen</li>
            <li>Verdacht richtig melden und abgrenzen</li>
            <li>Erste Schritte der Eindämmung durchführen</li>
          </ul>
        </Card>

        <Card title="Kernwissen in 60 Sekunden">
          <p style={{ margin: 0, color: "var(--muted)" }}>
            Typische Phishing-Signale sind Druck, eine ungewohnte Absenderadresse
            und ein Link, der auf eine nur ähnlich aussehende Domain führt.
            Unbekannte Anhänge und Makros nicht öffnen. Bei Kontoübernahme sind
            Anzeichen zum Beispiel Login-Meldungen ohne eigenes Zutun, neuer Ort
            oder neues Gerät.
          </p>
        </Card>

        <InfoBox variant="achtung" title="Achtung: Häufiger Trick">
          Zeitdruck und eine gefälschte Login-Seite. Pausiere kurz und prüfe
          Domain und Absenderadresse. Keine Anhänge öffnen, bevor du sicher bist.
        </InfoBox>

        <InfoBox variant="tipp" title="Tipp: Link sicher prüfen">
          Mit Mouseover die Zieladresse lesen. In Apps die Adresse manuell in die
          Adresszeile eingeben, statt auf den Link zu tippen.
        </InfoBox>

        <Card title="Praxis in 10 Minuten">
          <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Link prüfen und Domain mit der echten Firma vergleichen</li>
            <li>Auffällige Absenderadresse notieren, z. B. support@firmadomain</li>
            <li>Screenshot machen, nicht weiterleiten, an den Security-Kontakt melden</li>
          </ol>
        </Card>

        <Card title="Checkliste bei akutem Verdacht">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
            <li>Internetverbindung trennen, WLAN aus</li>
            <li>Passwort ändern und 2FA aktivieren</li>
            <li>Gerät nicht ausschalten, Evidenz erhalten</li>
            <li>Vorfall melden mit Uhrzeit und kurzem Kontext</li>
          </ul>
        </Card>

        <Card title="Mini-Quiz: 3 Fragen">
          <MiniQuiz questions={questions} />
        </Card>

        <Nav next="/services/network-cloud" />
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

function Nav({ next }) {
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
      <span />
      <a href={next} className="btn btn-primary">Nächste Lektion</a>
    </div>
  );
}
