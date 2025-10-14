// app/security/page.js

export const metadata = {
  title: "IT Security Grundlagen | Bubble Security",
  description:
    "Einfach erklärt: Menschen, Technik, Prozesse. Praxis Tipps, Checkliste, Video und Ressourcen, für KMU und Teams.",
};

export default function SecurityPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "28px auto 40px", paddingInline: 14 }}>
      {/* HERO / Intro */}
      <section
        className="section"
        style={{
          borderRadius: 20,
          background:
            "linear-gradient(135deg, rgba(239,68,68,0.12), rgba(239,68,68,0.06))",
          border: "1px solid rgba(239,68,68,0.35)",
          boxShadow: "0 18px 45px rgba(239,68,68,0.08)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 900 }}>
          IT Security <span style={{ color: "var(--red)" }}>einfach erklärt</span>
        </h1>
        <p style={{ color: "var(--muted)", marginTop: 8, lineHeight: 1.6 }}>
          Sicherheit schützt Computer, Netzwerke und Daten vor Angriffen, Verlust oder
          Missbrauch. Ziel ist es, die <strong>Vertraulichkeit</strong>,{" "}
          <strong>Integrität</strong> und <strong>Verfügbarkeit</strong> von
          Informationen zu gewährleisten, ohne deine Teams zu bremsen.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
          <a href="/quiz" className="btn btn-primary" style={{ height: 46 }}>
            Security Quiz starten
          </a>
          <a href="/contact" className="btn btn-ghost" style={{ height: 46 }}>
            Unverbindlich anfragen
          </a>
        </div>
      </section>

      {/* Drei Säulen */}
      <section
        className="section"
        style={{
          marginTop: 18,
          borderRadius: 20,
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <h2 style={{ margin: "0 0 12px", fontSize: 26, fontWeight: 900 }}>
          Die 3 Säulen der Cybersicherheit
        </h2>

        <div
          style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {/* Menschen */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              borderRadius: 14,
              padding: 14,
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 900 }}>1. Menschen</h3>
            <p style={{ color: "var(--muted)", marginTop: 4 }}>
              Menschen sind oft das schwächste Glied. Schulungen und klare Regeln verhindern Fehler.
            </p>
            <ul style={{ margin: "8px 0 0 16px" }}>
              <li>Phishing E Mails erkennen und melden</li>
              <li>Starke, einzigartige Passwörter</li>
              <li>2 Faktor Authentifizierung 2FA wo möglich</li>
              <li>Keine sensiblen Daten über unsichere Kanäle</li>
            </ul>
          </div>

          {/* Technik */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              borderRadius: 14,
              padding: 14,
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 900 }}>2. Technik</h3>
            <p style={{ color: "var(--muted)", marginTop: 4 }}>
              Moderne Schutzmechanismen reduzieren Risiken und stoppen viele Angriffe automatisch.
            </p>
            <ul style={{ margin: "8px 0 0 16px" }}>
              <li>Updates und Security Patches zeitnah einspielen</li>
              <li>Antivirus / EDR verwenden</li>
              <li>Verschlüsselung für Geräte und Backups</li>
              <li>Zero Trust Prinzip: nur nötige Rechte</li>
            </ul>
          </div>

          {/* Prozesse */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              borderRadius: 14,
              padding: 14,
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 900 }}>3. Prozesse</h3>
            <p style={{ color: "var(--muted)", marginTop: 4 }}>
              Klar definierte Abläufe sorgen dafür, dass im Notfall nichts anbrennt.
            </p>
            <ul style={{ margin: "8px 0 0 16px" }}>
              <li>Security Richtlinien und Zuständigkeiten dokumentieren</li>
              <li>Notfallplan und Incident Response festlegen</li>
              <li>Regelmässige Backups testen Wiederherstellung</li>
              <li>Schwachstellen und Logs regelmässig prüfen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Sektion */}
      <section
        className="section"
        style={{
          marginTop: 18,
          borderRadius: 20,
          background:
            "linear-gradient(135deg, rgba(239,68,68,0.10), rgba(239,68,68,0.05))",
          border: "1px solid rgba(239,68,68,0.28)",
        }}
      >
        <div style={{ display: "grid", gap: 14, gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ minWidth: 0 }}>
            <h2 style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 900 }}>
              3 Minuten: worauf es wirklich ankommt
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 0, lineHeight: 1.6 }}>
              Kurzer Überblick über die wichtigsten Massnahmen, die jedes KMU direkt
              umsetzen kann. Ideal, um Teams abzuholen und schnelle Erfolge zu erzielen.
            </p>
            <ul style={{ margin: "8px 0 0 16px" }}>
              <li>Phishing kurz erklärt</li>
              <li>2FA und Passwörter: Best Practice</li>
              <li>Backups und Updates pragmatisch</li>
            </ul>
            <p style={{ marginTop: 10 }}>
              <small style={{ color: "var(--muted)" }}>
                Hinweis: Autoplay funktioniert nur stummgeschaltet muted. Du kannst das
                Video jederzeit mit Ton abspielen.
              </small>
            </p>
          </div>

          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.35)",
            }}
          >
            {/* Lege deine Datei in /public/security.mp4 */}
            <video
              src="/security.mp4"
              controls
              muted
              autoPlay
              loop
              playsInline
              style={{ width: "100%", height: "100%", display: "block" }}
              poster="/window.svg"
            />
          </div>
        </div>
      </section>

      {/* Checkliste */}
      <section
        className="section"
        style={{
          marginTop: 18,
          borderRadius: 20,
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <h2 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 900 }}>Schnelle Checkliste</h2>

        <div
          style={{
            display: "grid",
            gap: 10,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {[
            "2FA überall aktiv",
            "Updates automatisch",
            "Passwort Manager im Einsatz",
            "Backups: 3 2 1 Regel",
            "Admin Rechte stark begrenzen",
            "Phishing Meldung im Mail Client",
          ].map((c) => (
            <div
              key={c}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                borderRadius: 12,
                padding: "10px 12px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span aria-hidden style={{ color: "var(--red)", fontWeight: 900 }}>
                ✓
              </span>
              <span>{c}</span>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 12, color: "var(--muted)" }}>
          <strong>Tipp:</strong> Schon kleine Massnahmen wie ein Passwort Manager oder 2FA
          machen einen riesigen Unterschied, sofort umsetzbar, kaum Aufwand.
        </p>
      </section>

      {/* FAQ ohne JS, mit <details> */}
      <section
        className="section"
        style={{
          marginTop: 18,
          borderRadius: 20,
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <h2 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 900 }}>FAQ kurz und knapp</h2>

        <div style={{ display: "grid", gap: 8 }}>
          <details
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "10px 12px",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 700 }}>
              Was ist die 3 2 1 Backup Regel
            </summary>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>
              3 Kopien deiner Daten, auf 2 unterschiedlichen Medien, 1 Kopie extern oder offsite.
              So bleibst du auch bei Ransomware oder Hardware Ausfällen handlungsfähig.
            </p>
          </details>

          <details
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "10px 12px",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 700 }}>
              Warum ist 2FA so wichtig
            </summary>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>
              2FA verhindert, dass gestohlene Passwörter sofort zum Zugriff führen. Ein
              zweiter Faktor App oder Code oder Key blockt die meisten Angriffe zuverlässig.
            </p>
          </details>

          <details
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "10px 12px",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 700 }}>
              Wie erkenne ich Phishing schnell
            </summary>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>
              Prüfe Absender Adresse und Link Ziel, achte auf Druck oder Dringlichkeit, Tippfehler,
              unerwartete Anhänge. Im Zweifel, nicht klicken, intern nachfragen.
            </p>
          </details>
        </div>
      </section>

      {/* Ressourcen */}
      <section
        className="section"
        style={{
          marginTop: 18,
          borderRadius: 20,
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <h2 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 900 }}>Ressourcen</h2>

        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {[
            {
              icon: "/globe.svg",
              title: "Best Practices KMU",
              text: "Kurze Leitlinien, die sofort helfen, ideal für kleine Teams.",
            },
            {
              icon: "/file.svg",
              title: "Vorlage Security Richtlinie",
              text: "Einfach anpassen und intern nutzen: Rollen, Zuständigkeiten, Regeln.",
            },
            {
              icon: "/window.svg",
              title: "Awareness Material",
              text: "Poster, kurze Mails und Slides für regelmässige Sensibilisierung.",
            },
          ].map((r) => (
            <div
              key={r.title}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 12,
                alignItems: "start",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                borderRadius: 14,
                padding: 12,
              }}
            >
              <img
                src={r.icon}
                alt=""
                width={28}
                height={28}
                style={{ display: "block", objectFit: "contain", opacity: 0.9 }}
              />
              <div>
                <div style={{ fontWeight: 900 }}>{r.title}</div>
                <div style={{ color: "var(--muted)", marginTop: 4 }}>{r.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA unten */}
      <section
        className="section"
        style={{
          marginTop: 18,
          borderRadius: 20,
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(239,68,68,0.14), rgba(239,68,68,0.06))",
          border: "1px solid rgba(239,68,68,0.35)",
        }}
      >
        <h3 style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 900 }}>
          Möchtest du das für dein Team umsetzen
        </h3>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Wir helfen pragmatisch, Schulung, 2FA, Backups, Richtlinien und mehr.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn-primary" style={{ height: 46 }}>
            Kontakt aufnehmen
          </a>
          <a href="/quiz" className="btn btn-ghost" style={{ height: 46 }}>
            Quiz ausprobieren
          </a>
        </div>
      </section>
    </main>
  );
}
