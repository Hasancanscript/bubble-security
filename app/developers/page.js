// app/developers/page.js

export const metadata = {
  title: "Entwickler | Bubble Security",
  description:
    "Ueber die Entwickler: Hasan Balci (Swisscom) und Simon Gemetti (EgoKiefer) beide studieren Wirtschaftsinformatik HF an der Feusi.",
};

export default function DevelopersPage() {
  return (
    <main style={{ maxWidth: 1200, margin: "28px auto 40px", paddingInline: 14 }}>
      {/* HEADLINE */}
      <header
        className="section"
        style={{
          borderRadius: 20,
          background:
            "linear-gradient(135deg, rgba(239,68,68,0.12), rgba(239,68,68,0.06))",
          border: "1px solid rgba(239,68,68,0.35)",
          boxShadow: "0 18px 45px rgba(239,68,68,0.08)",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 36, fontWeight: 900 }}>
          Unser <span style={{ color: "var(--red)" }}>Entwickler Team</span>
        </h1>
        <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
          Zwei Macher mit Praxis beide studieren{" "}
          <strong>Wirtschaftsinformatik HF (Feusi)</strong>.
        </p>
      </header>

      {/* TEAM CARDS */}
      <section
        style={{
          marginTop: 18,
          display: "grid",
          gap: 18,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {/* Hasan */}
        <article
          className="section"
          style={{
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.10)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.15))",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            display: "grid",
            gap: 14,
            justifyItems: "center",
            textAlign: "center",
            paddingTop: 22,
          }}
        >
          {/* Foto */}
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(239,68,68,0.45)",
              boxShadow: "0 16px 36px rgba(239,68,68,0.18)",
              background: "#0a0b0e",
            }}
          >
            <img
              src="/hasan.png"
              alt="Hasan Balci Profilbild"
              width={180}
              height={180}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 18%",
                display: "block",
              }}
            />
          </div>

          {/* Name & Rolle */}
          <h2 style={{ margin: "6px 0 0", fontSize: 24, fontWeight: 900 }}>Hasan Balci</h2>
          <div style={{ color: "var(--muted)" }}>2nd Level Fiber Inhouse Order</div>

          {/* Arbeitgeber + Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: "10px 12px",
              marginTop: 4,
            }}
          >
            <img
              src="/swisscom.png"
              alt="Swisscom"
              width={28}
              height={28}
              style={{ objectFit: "contain", display: "block" }}
            />
            <strong>Swisscom</strong>
          </div>

          {/* Details */}
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: 8,
              width: "100%",
            }}
          >
            {[
              "2nd Level im Bereich Fiber Inhouse Order",
              "Praxis in Support und koordinativen Prozessen",
              "Studium Wirtschaftsinformatik HF (Feusi)",
            ].map((t) => (
              <li
                key={t}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "start",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "10px 12px",
                  borderRadius: 12,
                  textAlign: "left",
                }}
              >
                <span aria-hidden style={{ color: "var(--red)", fontWeight: 900 }}>
                  ●
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Simon */}
        <article
          className="section"
          style={{
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.10)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.15))",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            display: "grid",
            gap: 14,
            justifyItems: "center",
            textAlign: "center",
            paddingTop: 22,
          }}
        >
          {/* Foto */}
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(239,68,68,0.45)",
              boxShadow: "0 16px 36px rgba(239,68,68,0.18)",
              background: "#0a0b0e",
            }}
          >
            <img
              src="/simon.png"
              alt="Simon Gemetti Profilbild"
              width={180}
              height={180}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 18%",
                display: "block",
              }}
            />
          </div>

          {/* Name & Rolle */}
          <h2 style={{ margin: "6px 0 0", fontSize: 24, fontWeight: 900 }}>Simon Gemetti</h2>
          <div style={{ color: "var(--muted)" }}>Kalkulator</div>

          {/* Arbeitgeber + Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: "10px 12px",
              marginTop: 4,
            }}
          >
            <img
              src="/egokiefer.png"
              alt="EgoKiefer"
              width={28}
              height={28}
              style={{ objectFit: "contain", display: "block" }}
            />
            <strong>EgoKiefer</strong>
          </div>

          {/* Details */}
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: 8,
              width: "100%",
            }}
          >
            {[
              "Kalkulator bei EgoKiefer",
              "Zahlen Angebote und Genauigkeit",
              "Studium Wirtschaftsinformatik HF (Feusi)",
            ].map((t) => (
              <li
                key={t}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "start",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "10px 12px",
                  borderRadius: 12,
                  textAlign: "left",
                }}
              >
                <span aria-hidden style={{ color: "var(--red)", fontWeight: 900 }}>
                  ●
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </article>
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
          Fragen oder Ideen Wir freuen uns.
        </h3>
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          Schreib kurz wobei wir helfen koennen wir melden uns schnell.
        </p>
        <a href="/contact" className="btn btn-primary" style={{ height: 46 }}>
          Kontakt aufnehmen
        </a>
      </section>
    </main>
  );
}
