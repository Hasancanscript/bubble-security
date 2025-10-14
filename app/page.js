"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  return (
    <main style={{ display: "grid", gap: 28 }}>
      {/* Lern Demo Hinweis */}
      <LernDemoBanner />
      <HeroWithMatrix />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <PartnersSection />
    </main>
  );
}

/* =========================
   Lern Demo Banner
   ========================= */
function LernDemoBanner() {
  return (
    <div
      style={{
        width: "100%",
        background: "rgba(245,158,11,0.10)",
        color: "rgb(252,211,77)",
        fontSize: 14,
        padding: "10px 16px",
        textAlign: "center",
        borderRadius: 12,
        border: "1px solid rgba(245,158,11,0.35)",
      }}
    >
      Hinweis: Dieses Projekt ist eine Lern und Demo Webseite. Es gibt keine echten Angebote.
    </div>
  );
}

/* =========================
   HERO mit Matrix Effekt
   ========================= */
function HeroWithMatrix() {
  const [matrixOn, setMatrixOn] = useState(true);

  return (
    <section
      className="section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: 0,
        borderRadius: 18,
        borderColor: "rgba(239,68,68,0.35)",
      }}
    >
      {/* Matrix Canvas */}
      <div style={{ position: "absolute", inset: 0 }}>
        <MatrixCanvas running={matrixOn} />
      </div>

      {/* Rot Schwarz Overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80% 120% at 15% 0%, rgba(239,68,68,0.18), transparent 60%), linear-gradient(135deg, rgba(239,68,68,0.18), rgba(0,0,0,0.6))",
          pointerEvents: "none",
        }}
      />

      {/* Inhalt */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "72px 24px",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: 44,
            lineHeight: 1.1,
            fontWeight: 900,
            margin: 0,
            textShadow: "0 2px 18px rgba(0,0,0,0.6)",
          }}
        >
          Willkommen bei <span style={{ color: "var(--red)" }}>Bubble Security</span>
        </h1>

        <p
          style={{
            margin: "14px auto 26px",
            color: "var(--muted)",
            fontSize: 18,
            maxWidth: 720,
          }}
        >
          Wir erklären Cybersecurity einfach und praxisnah. Lern Demo für Teams und KMU.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 16,
          }}
        >
          {/* direkte Detailseite Lektion 1 */}
          <Link href="/services/threat-detection" className="btn btn-primary">
            Lektion 1 starten
          </Link>
          <Link href="/quiz" className="btn btn-ghost">
            Quiz starten
          </Link>
        </div>

        <button
          onClick={() => setMatrixOn((v) => !v)}
          className="btn btn-ghost"
          style={{ fontSize: 14 }}
          aria-pressed={matrixOn}
        >
          {matrixOn ? "Matrix Effekt ausschalten" : "Matrix Effekt einschalten"}
        </button>
      </div>
    </section>
  );
}

function MatrixCanvas({ running }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const colsRef = useRef(0);
  const yPosRef = useRef([]);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent.clientWidth;
      const height = Math.max(320, Math.min(520, Math.round(window.innerHeight * 0.48)));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.font = `16px monospace`;

      colsRef.current = Math.floor(width / 16);
      yPosRef.current = Array(colsRef.current).fill(0);
    };

    resize();
    window.addEventListener("resize", resize);

    const glyphs =
      "01アカサタナハマヤラワABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const ctx = ctxRef.current;
      if (!ctx) return;

      ctx.fillStyle = "rgba(0,0,0,0.16)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < colsRef.current; i++) {
        const text = glyphs.charAt(Math.floor(Math.random() * glyphs.length));
        const x = i * 16;
        const y = yPosRef.current[i] * 16;

        ctx.fillStyle = "#22c55e";
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) yPosRef.current[i] = 0;
        else yPosRef.current[i]++;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    if (running) rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ctxRef.current) return;
    cancelAnimationFrame(rafRef.current);
    if (!running) return;

    const glyphs =
      "01アカサタナハマヤラワABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const ctx = ctxRef.current;
      if (!ctx) return;

      ctx.fillStyle = "rgba(0,0,0,0.16)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < colsRef.current; i++) {
        const text = glyphs.charAt(Math.floor(Math.random() * glyphs.length));
        const x = i * 16;
        const y = yPosRef.current[i] * 16;

        ctx.fillStyle = "#22c55e";
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) yPosRef.current[i] = 0;
        else yPosRef.current[i]++;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [running]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ display: "block", width: "100%", height: 360 }}
    />
  );
}

/* =========================
   Lerneinheiten Karten auf Home
   ========================= */
function ServicesSection() {
  const services = [
    {
      title: "Lektion 1 Bedrohungen erkennen",
      desc: "Du lernst häufige Angriffe zu erkennen und richtig zu reagieren.",
      icon: ShieldCheckIcon,
      href: "/services/threat-detection",
    },
    {
      title: "Lektion 2 Netzwerk und Cloud sicher",
      desc: "Zero Trust Grundlagen, sichere Konfiguration in M365, Azure und AWS.",
      icon: CloudLockIcon,
      href: "/services/network-cloud",
    },
    {
      title: "Lektion 3 Daten und Inhalte schützen",
      desc: "DLP Verschlüsselung und Richtlinien verständlich erklärt.",
      icon: DatabaseLockIcon,
      href: "/services/data-protection",
    },
    {
      title: "Lektion 4 Endgeräte absichern",
      desc: "EDR oder Antivirus, Patches und sichere Einstellungen auf Windows, macOS und Mobil.",
      icon: DeviceShieldIcon,
      href: "/services/endpoint-security",
    },
    {
      title: "Lektion 5 Security Awareness",
      desc: "Phishing erkennen, gutes Verhalten trainieren, Risiken senken.",
      icon: TrainingIcon,
      href: "/services/security-awareness",
    },
  ];

  return (
    <section className="section" style={{ borderRadius: 18 }}>
      <header style={{ textAlign: "center", marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 30, fontWeight: 900, letterSpacing: 0.2 }}>
          <span style={{ color: "var(--red)" }}>Unsere</span> Lerneinheiten
        </h2>
        <p style={{ color: "var(--muted)", marginTop: 8 }}>
          Kurz und klar. Jede Lektion in 10 bis 15 Minuten.
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          alignItems: "stretch",
        }}
      >
        {services.map((s, i) => (
          <article
            key={i}
            style={{
              borderRadius: 16,
              padding: 16,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.06)",
              transition: "transform .18s ease, border-color .18s ease, box-shadow .18s ease",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
              display: "flex",
              flexDirection: "column",
              minHeight: 220,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = "rgba(239,68,68,0.45)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(239,68,68,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <s.icon />
              <h3 style={{ margin: 0, fontWeight: 800, lineHeight: 1.2 }}>{s.title}</h3>
            </div>

            <p style={{ margin: 0, color: "var(--muted)" }}>{s.desc}</p>
            <div style={{ flex: 1 }} />

            <div style={{ marginTop: 14 }}>
              {/* direkte Detailseite pro Lektion */}
              <Link href={s.href} className="btn btn-ghost">
                Lektion ansehen
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================
   Benefits
   ========================= */
function BenefitsSection() {
  const items = [
    {
      title: "Einfach und verständlich",
      desc: "Keine Fachsprache, wir erklären und üben mit dir.",
      icon: SparkIcon,
    },
    {
      title: "Schnell wirksam",
      desc: "Mit 2FA, Backups und Updates erreichst du sofort 80 Prozent mehr Schutz.",
      icon: LightningIcon,
    },
    {
      title: "Regelmässige Betreuung",
      desc: "Regelmässige Checks, Reports und klare Empfehlungen.",
      icon: LoopIcon,
    },
  ];

  return (
    <section className="section" style={{ borderRadius: 18 }}>
      <header style={{ textAlign: "center", marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 30, fontWeight: 900 }}>
          Warum <span style={{ color: "var(--red)" }}>Bubble Security</span>
        </h2>
      </header>

      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        {items.map((b, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 12,
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14,
              padding: 16,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
            }}
          >
            <b.icon />
            <div>
              <h3 style={{ margin: "0 0 4px", fontWeight: 800 }}>{b.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   Lernpfad
   ========================= */
function ProcessSection() {
  const steps = [
    { t: "1 Grundlagen", d: "Kurz und klar in 10 Minuten." },
    { t: "2 Übungen", d: "Checklisten und kleine Aufgaben mit sofortiger Wirkung." },
    { t: "3 Quiz und Badges", d: "Teste dein Wissen und sammle Badges." },
  ];

  return (
    <section className="section" style={{ borderRadius: 18 }}>
      <header style={{ textAlign: "center", marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 30, fontWeight: 900 }}>
          So lernst du mit <span style={{ color: "var(--red)" }}>uns</span>
        </h2>
      </header>

      <ol
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "grid",
          gap: 14,
          maxWidth: 900,
          marginInline: "auto",
        }}
      >
        {steps.map((s, i) => (
          <li
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "48px 1fr",
              gap: 14,
              alignItems: "start",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14,
              padding: 16,
              background: "#111",
            }}
          >
            <div
              style={{
                height: 48,
                width: 48,
                borderRadius: 14,
                background: "rgba(239,68,68,0.12)",
                border: "1px solid rgba(239,68,68,0.5)",
                display: "grid",
                placeItems: "center",
                fontWeight: 900,
                color: "var(--red)",
              }}
            >
              {i + 1}
            </div>
            <div>
              <div style={{ fontWeight: 800, marginBottom: 4 }}>{s.t}</div>
              <div style={{ color: "var(--muted)" }}>{s.d}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* =========================
   FAQ
   ========================= */
function FAQSection() {
  const qa = [
    {
      q: "Brauche ich wirklich 2FA überall?",
      a: "Ja. 2FA verhindert Kontoübernahmen, auch wenn Passwörter geleakt wurden. Starte mit E Mail, Cloud Konten und Banking.",
    },
    {
      q: "Wie oft soll ich Backups testen?",
      a: "Einmal pro Monat kurz prüfen, ob die Wiederherstellung klappt.",
    },
    {
      q: "Wie nutze ich die Lern Demo?",
      a: "Starte mit Lektion 1 oder gehe direkt zum Quiz.",
    },
  ];

  return (
    <section className="section" style={{ borderRadius: 18 }}>
      <header style={{ textAlign: "center", marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 30, fontWeight: 900 }}>FAQ</h2>
      </header>

      <div style={{ display: "grid", gap: 12, maxWidth: 900, marginInline: "auto" }}>
        {qa.map((item, i) => (
          <details
            key={i}
            style={{
              background: "#111",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: 14,
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 700 }}>{item.q}</summary>
            <p style={{ marginTop: 8, color: "var(--muted)" }}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* =========================
   CTA
   ========================= */
function CTASection() {
  return (
    <section
      className="section"
      style={{
        borderRadius: 18,
        background:
          "linear-gradient(135deg, rgba(239,68,68,0.14), rgba(239,68,68,0.06))",
        border: "1px solid rgba(239,68,68,0.35)",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: 30, fontWeight: 900 }}>
        Bereit, dein Wissen zu stärken?
      </h2>
      <p
        style={{
          color: "var(--muted)",
          marginBottom: 16,
          maxWidth: 720,
          marginInline: "auto",
        }}
      >
        Starte mit Lektion 1 und erhalte einfache Schritte für mehr Sicherheit.
      </p>
      {/* direkte Detailseite Lektion 1 */}
      <a href="/services/threat-detection" className="btn btn-primary">
        Jetzt mit Lektion 1 beginnen
      </a>
    </section>
  );
}

/* =========================
   PARTNER, farbig, Fallbacks, Marquee
   ========================= */
function PartnersSection() {
  const partners = [
    { alt: "Swisscom",         srcList: ["/swisscom.png", "/swisscom.svg"] },
    { alt: "Feldschlösschen",  srcList: ["/feldschloesschen.png", "/feldschloesschen.svg"] },
    { alt: "Coop",             srcList: ["/coop.png", "/coop.svg"] },
    { alt: "Sunrise",          srcList: ["/sunrise.png", "/sunrise.svg"] },
    { alt: "Die Post",         srcList: ["/post.png", "/diepost.png", "/post.svg"] },
    { alt: "SBB CFF FFS",      srcList: ["/sbb.png", "/sbb.svg"] },
  ];

  function LogoImage({ srcList, alt }) {
    const [idx, setIdx] = useState(0);
    const src = srcList[idx] ?? srcList[0];
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setIdx((i) => (i + 1 < srcList.length ? i + 1 : i))}
        style={{
          maxHeight: 48,
          height: 48,
          width: "auto",
          objectFit: "contain",
          display: "block",
          filter: "none",
          opacity: 0.95,
          transition: "transform .2s ease, opacity .2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.95";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      />
    );
  }

  return (
    <section
      className="section"
      style={{
        borderRadius: 18,
        background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.10)",
        overflow: "hidden",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 10 }}>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 900 }}>Unsere Partner</h2>
        <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
          Gemeinsam für zuverlässige, stabile und sichere Lösungen.
        </p>
      </header>

      <div className="partner-marquee" style={{ position: "relative" }}>
        <div
          aria-hidden
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 60,
            background: "linear-gradient(90deg, rgba(12,13,16,1) 0%, rgba(12,13,16,0) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: 60,
            background: "linear-gradient(270deg, rgba(12,13,16,1) 0%, rgba(12,13,16,0) 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="partner-track" style={{ display: "flex", gap: 44 }}>
          {[...partners, ...partners].map((p, i) => (
            <div
              key={p.alt + i}
              style={{
                flex: "0 0 auto",
                display: "grid",
                placeItems: "center",
                minWidth: 140,
                height: 64,
              }}
              title={p.alt}
            >
              <LogoImage srcList={p.srcList} alt={p.alt} />
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .partner-marquee { overflow: hidden; }
            .partner-track {
              width: max-content;
              animation: partner-slide 38s linear infinite;
              will-change: transform;
            }
            .partner-marquee:hover .partner-track { animation-play-state: paused; }
            @keyframes partner-slide {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            @media (prefers-reduced-motion: reduce) {
              .partner-track { animation: none !important; }
            }
          `,
        }}
      />
    </section>
  );
}

/* =========================
   Inline Icons SVG
   ========================= */
function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--red)" }}>
      <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CloudLockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--red)" }}>
      <path d="M6 18a4 4 0 010-8 5 5 0 019.5-1.5A4.5 4.5 0 0118 18H6z" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12.5" y="12.5" width="6" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 12.5V11a1.5 1.5 0 013 0v1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function DatabaseLockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--red)" }}>
      <ellipse cx="8.5" cy="6.5" rx="4.5" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 6.5V11c0 1.4 2 2.5 4.5 2.5S13 12.4 13 11V6.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="12" width="6.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.5 12V10.8a1.7 1.7 0 013.4 0V12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function DeviceShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--red)" }}>
      <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 6l3 1v3c0 3-1.5 5.4-3 6-1.5-.6-3-3-3-6V7l3-1z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function TrainingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--red)" }}>
      <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10v6c0 1.1 2.7 2 6 2s6-.9 6-2v-6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 13v5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--red)" }}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M6 18l4-4M14 10l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function LightningIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--red)" }}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function LoopIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--red)" }}>
      <path d="M3 12a6 6 0 0110-4.24M21 12a6 6 0 01-10 4.24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 4H5V0M15 20h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
