// app/about/page.js

export const metadata = {
  title: "Über uns | Bubble Security",
  description:
    "Bubble Security – einfache, verständliche IT Sicherheitslösungen für KMU. Lerne unser Team, unsere Werte und unseren Ansatz kennen.",
};

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "28px auto 40px", paddingInline: 14 }}>
      {/* Intro: Text + Video (responsive ohne styled-jsx) */}
      <section
        className="section"
        style={{
          borderRadius: 24,
          display: "grid",
          gap: 22,
          // responsive ohne Media Query:
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          alignItems: "center",
          background:
            "linear-gradient(135deg, rgba(239,68,68,0.12), rgba(239,68,68,0.06))",
          border: "1px solid rgba(239,68,68,0.35)",
          boxShadow: "0 18px 45px rgba(239,68,68,0.08)",
        }}
      >
        {/* Text */}
        <div style={{ padding: "16px 6px" }}>
          <h1 style={{ margin: "0 0 10px", fontSize: 36, fontWeight: 900 }}>
            Über <span style={{ color: "var(--red)" }}>Bubble Security</span>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.6 }}>
            Wir machen IT Sicherheit einfach verständlich und praxistauglich – speziell
            für KMU. Von der schnellen Ersthilfe bis zur nachhaltigen Sicherheitsstrategie:
            Wir erklären ohne Fachchinesisch, setzen um, schulen dein Team und bleiben an
            deiner Seite.
          </p>

          <ul
            style={{
              margin: "16px 0 0",
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: 10,
            }}
          >
            {[
              "24/7 Incident Response & schnelle Hilfe im Notfall",
              "Security Checks, Härtung von M365, Azure, Netzwerk & Endpoints",
              "Awareness Trainings mit Phishing Simulationen",
              "Datenschutz & Datenflusskontrolle (DLP)",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "10px 12px",
                  borderRadius: 12,
                }}
              >
                <span aria-hidden style={{ color: "var(--red)", fontWeight: 900 }}>
                  ●
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/contact" className="btn btn-primary" style={{ height: 46 }}>
              Unverbindlich anfragen
            </a>
            <a href="/quiz" className="btn btn-ghost" style={{ height: 46 }}>
              Security Wissen testen
            </a>
          </div>
        </div>

        {/* Video Card */}
        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            background:
              "radial-gradient(90% 90% at 50% 50%, rgba(255,255,255,0.05), rgba(0,0,0,0.2))",
          }}
        >
          <video
            src="/about.mp4"           // Datei in /public/about.mp4 ablegen
            poster="/about-poster.jpg" // optional in /public/about-poster.jpg
            autoPlay
            loop
            muted
            playsInline
            controls
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              aspectRatio: "16 / 9",
              backgroundColor: "#000",
            }}
          />
        </div>
      </section>

      {/* Zahlen / Werte */}
      <section
        className="section"
        style={{
          marginTop: 18,
          borderRadius: 20,
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {[
            { k: "99.9%", v: "Verfügbarkeit unserer Kernservices" },
            { k: "15+", v: "Jahre Security Erfahrung im Team" },
            { k: "500+", v: "geschulte Mitarbeitende pro Jahr" },
            { k: "4h", v: "durchschnittliche Reaktionszeit im Incident" },
          ].map((item) => (
            <div
              key={item.k}
              style={{
                padding: "16px 14px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900, color: "var(--red)" }}>
                {item.k}
              </div>
              <div style={{ color: "var(--muted)" }}>{item.v}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <h2 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 900 }}>
            Unsere Werte
          </h2>
          <p style={{ color: "var(--muted)", margin: 0 }}>
            <strong>Einfach und verständlich:</strong> Wir erklären, bevor wir absichern.{" "}
            <strong>Praxistauglich:</strong> Lösungen, die im Alltag funktionieren.{" "}
            <strong>Partnerschaftlich:</strong> Wir begleiten langfristig mit Checks,
            Reports und klaren Empfehlungen.
          </p>
        </div>
      </section>

      {/* CTA */}
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
          Bereit, dein Unternehmen sicherer zu machen?
        </h3>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Lass uns kurz sprechen – wir zeigen dir in 15 Minuten, wo du am meisten
          Sicherheitsgewinn erzielst.
        </p>
        <a href="/contact" className="btn btn-primary" style={{ height: 46 }}>
          Kontakt aufnehmen
        </a>
      </section>
    </main>
  );
}
