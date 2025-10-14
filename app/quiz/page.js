"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 15 Fragen jeweils:
 * - q: Frage
 * - options: Antwortmöglichkeiten
 * - correct: Index der richtigen Antwort
 * - explain: kurze Erklärung
 */
const QUESTIONS = [
  {
    q: "Welche Aktivitaet entfaltet Ransomware auf Ihrem PC?",
    options: [
      "Sie verschluesselt die Daten",
      "Sie verschickt sich automatisch an alle Mail Adressen",
      "Sie belegt die Festplatte mit einem Passwort",
    ],
    correct: 0,
    explain:
      "Ransomware verschluesselt Dateien und fordert Lösegeld. Schutz: Offline Backups, Updates, keine unbekannten Anhaenge öffnen.",
  },
  {
    q: "Social Engineering ist ...",
    options: [
      "zwischenmenschliche Beeinflussung, um an heikle Infos zu kommen",
      "ein Schaedling, der nach seinem Erfinder benannt ist",
      "ein Schaedling, der ueber soziale Netzwerke verbreitet wird",
    ],
    correct: 0,
    explain:
      "Angreifer nutzen psychologische Tricks (z. B. falsche Dringlichkeit), um Passwörter oder interne Infos zu erlangen.",
  },
  {
    q: "Was ist ein sicheres Passwort?",
    options: [
      "12345678, damit ich es nicht vergesse",
      "Eine zufaellige Kombination aus Zeichen, min. 12–16 Laenge",
      "Mein Vorname + Geburtsdatum",
    ],
    correct: 1,
    explain:
      "Lange, zufaellige Passwörter sind am sichersten. Nutze einen Passwort Manager fuer unterschiedliche Logins.",
  },
  {
    q: "Warum 2 Faktor Authentisierung (2FA)?",
    options: [
      "Sie ersetzt Passwörter vollstaendig",
      "Sie fuegt eine zusaetzliche Sicherheitsebene hinzu",
      "Sie macht Geraete schneller",
    ],
    correct: 1,
    explain:
      "2FA verhindert Kontouebernahmen, selbst wenn ein Passwort geleakt wurde (z. B. Code in App oder Security Key).",
  },
  {
    q: "Welche Backup Regel ist bewaehrt?",
    options: ["3 2 1 Regel", "9 1 1 Regel", "2 4 6 Regel"],
    correct: 0,
    explain:
      "3 2 1: 3 Kopien, 2 unterschiedliche Medien, 1 Kopie extern/offline. So bleibt ein Angriff selten total.",
  },
  {
    q: "Woran erkennst du haeufig Phishing?",
    options: [
      "Absender Adresse, Rechtschreibfehler, ungewöhnliche Links",
      "Immer an einem roten Logo",
      "Phishing kommt nur per SMS",
    ],
    correct: 0,
    explain:
      "Typisch sind gefaelschte Absender, Druck (sofort handeln!), Link Taeuschungen und Dateianhaenge.",
  },
  {
    q: "Was ist ein VPN?",
    options: [
      "Ein Werbe Netzwerk",
      "Ein gesicherter, verschluesselter Tunnel in ein Netzwerk",
      "Eine neue Art von WLAN Router",
    ],
    correct: 1,
    explain:
      "VPN verschluesselt den Datenverkehr und verbindet dich sicher mit einem Zielnetz (z. B. Firma).",
  },
  {
    q: "Patch Management bedeutet ...",
    options: [
      "nur optische Updates",
      "regelmaessige Sicherheits Updates fuer Systeme/Software",
      "Backups löschen",
    ],
    correct: 1,
    explain:
      "Sicherheitsluecken werden durch Updates geschlossen. Automatisiere Updates, wenn möglich.",
  },
  {
    q: "Was ist ein Passwort Manager?",
    options: [
      "Ein Tool, das Passwörter speichert und starke generiert",
      "Eine Excel Liste auf dem Desktop",
      "Ein Browser Lesezeichen",
    ],
    correct: 0,
    explain:
      "Passwort Manager erstellt und speichert komplexe, einzigartige Passwörter verschluesselt.",
  },
  {
    q: "Wofuer steht Least Privilege?",
    options: [
      "Alle bekommen Admin Rechte",
      "Jede Person bekommt nur die minimal nötigen Rechte",
      "Niemand darf etwas",
    ],
    correct: 1,
    explain:
      "Begrenze Berechtigungen strikt. So wird Missbrauch oder Schaden bei Kompromittierung reduziert.",
  },
  {
    q: "Welche Datei ist besonders verdaechtig?",
    options: ["Rechnung.pdf", "Urlaub.jpg", "Bewerbung.pdf.exe"],
    correct: 2,
    explain:
      "Doppelte Endungen tarnen ausfuehrbare Dateien (.exe). Niemals öffnen, sofort löschen/melden.",
  },
  {
    q: "Was bedeutet MFA?",
    options: ["Multi Faktor Authentisierung", "Multi File Archiv", "Mega Fast Access"],
    correct: 0,
    explain:
      "MFA = mehrere Faktoren (Wissen, Besitz, Biometrie). Höhere Sicherheit als nur Passwort.",
  },
  {
    q: "Wie schuetzt du dich im öffentlichen WLAN?",
    options: [
      "Kein HTTPS verwenden",
      "VPN nutzen und nur verschluesselte Seiten (HTTPS) aufrufen",
      "Alle Passwörter ueberall gleich verwenden",
    ],
    correct: 1,
    explain:
      "Ohne VPN/HTTPS kann Verkehr mitgelesen/manipuliert werden. Meide Logins in offenen WLANs.",
  },
  {
    q: "Was ist ein Security Awareness Training?",
    options: [
      "Technische Wartung am Server",
      "Schulung, um Mitarbeitende fuer Risiken zu sensibilisieren",
      "Eine Backup Wiederherstellung",
    ],
    correct: 1,
    explain:
      "Regelmaessige, kurze Trainings senken Phishing Erfolg deutlich und staerken die Sicherheitskultur.",
  },
  {
    q: "Was machst du bei einem Verdachtsfall (Phishing/Schadsoftware)?",
    options: [
      "Ignorieren, wird schon nichts sein",
      "Sofort IT/Security melden und Geraet vom Netz trennen",
      "An Freund innen weiterleiten und fragen",
    ],
    correct: 1,
    explain:
      "Je schneller reagiert wird, desto kleiner der Schaden. Melden, Netzwerk trennen, keine weiteren Klicks.",
  },
];

/* -------- Ergebnis Tiers / Badges + Feedback -------- */
function getResult(score, total) {
  const pct = Math.round((score / total) * 100);

  // 5 Stufen inkl. Badge, Stil & Tipps
  if (pct >= 95) {
    return {
      pct,
      badge: { label: "Security Hero", icon: "🏆", bg: "rgba(34,197,94,0.14)", fg: "#bbf7d0", border: "1px solid rgba(34,197,94,0.45)" },
      title: "Wow Hero Niveau!",
      text:
        "Vorbildlich! Du handelst sehr sicherheitsbewusst. Bleib bei Updates und 2FA konsequent und plane regelmaessige Checks.",
      tips: [
        "Regelmaessige Mini Audits (z. B. Berechtigungen, Schatten IT)",
        "Security Key (FIDO2) fuer kritische Konten nutzen",
        "Backups inkl. Restore Test einplanen",
      ],
      confetti: true,
    };
  }
  if (pct >= 80) {
    return {
      pct,
      badge: { label: "Pro", icon: "✅", bg: "rgba(34,197,94,0.12)", fg: "#bbf7d0", border: "1px solid rgba(34,197,94,0.45)" },
      title: "Stark Profi Niveau!",
      text:
        "Du beherrschst die Grundlagen sehr gut. Halte Routinen (2FA, Updates, Backups) bei und vertiefe Spezialthemen.",
      tips: [
        "Security Key zusaetzlich zur App fuer wichtige Konten",
        "Regelmaessige Restore Tests deiner Backups",
        "Least Privilege konsequent halten",
      ],
      confetti: true,
    };
  }
  if (pct >= 60) {
    return {
      pct,
      badge: { label: "Defender", icon: "🛡️", bg: "rgba(250,204,21,0.12)", fg: "#fef3c7", border: "1px solid rgba(250,204,21,0.45)" },
      title: "Solide Basis!",
      text:
        "Du bist sicher unterwegs. Mit ein paar Tweaks erreichst du ein sehr gutes Sicherheitsniveau.",
      tips: [
        "Passwort Manager ueberall nutzen und alte Passwörter ersetzen",
        "2FA lueckenlos aktivieren",
        "Kurztrainings/Phishing Checks regelmaessig einplanen",
      ],
      confetti: false,
    };
  }
  if (pct >= 40) {
    return {
      pct,
      badge: { label: "Learner", icon: "🧭", bg: "rgba(59,130,246,0.12)", fg: "#dbeafe", border: "1px solid rgba(59,130,246,0.45)" },
      title: "Guter Anfang!",
      text:
        "Du hast die wichtigsten Themen erkannt jetzt gezielt nachschaerfen und Routinen aufbauen.",
      tips: [
        "2FA fuer E Mail, Cloud und Banking sofort aktivieren",
        "3 2 1 Backups einrichten",
        "Phishing Merkmale ueben (Absender, Links, Druck)",
      ],
      confetti: false,
    };
  }
  return {
    pct,
    badge: { label: "Aufholer", icon: "⚠️", bg: "rgba(239,68,68,0.12)", fg: "#fecaca", border: "1px solid rgba(239,68,68,0.6)" },
    title: "Hoopla nicht schlimm!",
    text:
      "Mit drei Basics hebst du deine Sicherheit sofort deutlich an. Fang klein an, aber konsequent.",
    tips: [
      "Passwort Manager einfuehren und starke Passwörter nutzen",
      "2FA wirklich ueberall einschalten",
      "Auto Updates aktivieren (System und Apps)",
    ],
    confetti: false,
  };
}

/* Kleiner Konfetti Effekt (Canvas), keine Abhaengigkeiten */
function ConfettiBurst({ run = false, duration = 1800 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!run) return;
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let raf = 0;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const w = canvas.parentElement.clientWidth;
      const h = 220; // genug Höhe fuer Burst im Ergebnis
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();

    const colors = ["#22c55e", "#ef4444", "#f59e0b", "#3b82f6", "#a855f7"];
    const pieces = Array.from({ length: 80 }, () => ({
      x: canvas.clientWidth / 2,
      y: 20,
      r: Math.random() * 6 + 3,
      c: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 2 + 3,
      a: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.2,
    }));

    const start = performance.now();
    const draw = (t) => {
      const elapsed = t - start;
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.a += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.a);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        ctx.restore();
      });
      if (elapsed < duration) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    const end = setTimeout(() => cancelAnimationFrame(raf), duration + 50);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(end);
      window.removeEventListener("resize", resize);
    };
  }, [run, duration]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: 220,
        pointerEvents: "none",
      }}
    />
  );
}

export default function QuizPage() {
  const [step, setStep] = useState(0); // aktuelle Frage
  const [chosen, setChosen] = useState(Array(QUESTIONS.length).fill(null));
  const [showExplain, setShowExplain] = useState(false);
  const [finished, setFinished] = useState(false);

  const q = QUESTIONS[step];
  const selected = chosen[step];
  const isCorrect = selected === q?.correct;

  const choose = (idx) => {
    const next = [...chosen];
    next[step] = idx;
    setChosen(next);
    setShowExplain(true); // sofortige Auswertung
  };

  const goNext = () => {
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
      setShowExplain(false);
    } else {
      setFinished(true);
    }
  };

  const goPrev = () => {
    if (step > 0) {
      setStep(step - 1);
      setShowExplain(chosen[step - 1] !== null);
    }
  };

  const score = chosen.reduce((s, a, i) => s + (a === QUESTIONS[i].correct ? 1 : 0), 0);

  if (finished) {
    const res = getResult(score, QUESTIONS.length);

    return (
      <main className="section" style={{ maxWidth: 900, margin: "24px auto", position: "relative", overflow: "hidden" }}>
        {/* Konfetti nur für Pro und Hero */}
        <ConfettiBurst run={res.confetti} />

        <h1 style={{ marginTop: 0, color: "var(--red)" }}>Dein Ergebnis</h1>
        <p style={{ fontSize: 18, marginBottom: 12 }}>
          Richtig: <strong>{score}</strong> von <strong>{QUESTIONS.length}</strong>{" "}
          ({res.pct}%)
        </p>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 14px",
            borderRadius: 999,
            background: res.badge.bg,
            color: res.badge.fg,
            border: res.badge.border,
            fontWeight: 800,
            marginBottom: 12,
          }}
        >
          <span aria-hidden style={{ fontSize: 18 }}>{res.badge.icon}</span>
          <span>{res.badge.label}</span>
        </div>

        {/* Tier Text */}
        <div style={{ background: res.badge.bg, border: res.badge.border, borderRadius: 10, padding: 14, marginBottom: 14 }}>
          <strong style={{ display: "block", marginBottom: 6 }}>{res.title}</strong>
          <span style={{ color: "var(--text)" }}>{res.text}</span>
        </div>

        {/* Next steps */}
        <div className="section" style={{ background: "transparent" }}>
          <strong>Empfohlene naechste Schritte:</strong>
          <ul style={{ marginTop: 8, marginBottom: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            {res.tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={() => {
              setStep(0);
              setFinished(false);
              setShowExplain(false);
              setChosen(Array(QUESTIONS.length).fill(null));
            }}
            className="btn btn-primary"
          >
            Quiz neu starten
          </button>

          <a href="/contact" className="btn btn-ghost">
            Kostenlosen Mini Check anfragen
          </a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 900, margin: "24px auto", display: "grid", gap: 16 }}>
      {/* Kopfzeile mit Schrittanzeige */}
      <div className="section" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ margin: 0, color: "var(--red)" }}>Security Quiz</h1>
        <div style={{ color: "var(--muted)" }}>
          Schritt {step + 1} von {QUESTIONS.length}
        </div>
      </div>

      {/* Fragekarte */}
      <div className="quiz-card">
        <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
          <strong>{q.q}</strong>
        </div>

        <div style={{ padding: 16, display: "grid", gap: 10 }}>
          {q.options.map((opt, idx) => {
            const picked = selected === idx;
            const showColors = showExplain && picked;
            const base = "quiz-option";
            const stateClass =
              showColors ? (idx === q.correct ? "correct" : "wrong") : picked ? "selected" : "";
            return (
              <button
                key={idx}
                onClick={() => choose(idx)}
                className={`${base} ${stateClass}`}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      height: 14,
                      width: 14,
                      borderRadius: "999px",
                      border: "2px solid",
                      borderColor: picked ? "var(--red)" : "rgba(255,255,255,0.35)",
                      background: picked ? "var(--red)" : "transparent",
                      flexShrink: 0,
                    }}
                  />
                  {opt}
                </span>

                {showColors && (
                  <span
                    style={{
                      fontWeight: 700,
                      color: idx === q.correct ? "rgb(34,197,94)" : "rgb(239,68,68)",
                      float: "right",
                    }}
                  >
                    {idx === q.correct ? "Richtig" : "Falsch"}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Erklaerung */}
        {showExplain && (
          <div
            style={{
              borderTop: "1px solid var(--border)",
              background: "rgba(255,255,255,0.04)",
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                background: isCorrect ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)",
                border: isCorrect
                  ? "1px solid rgba(34,197,94,0.45)"
                  : "1px solid rgba(239,68,68,0.6)",
                color: isCorrect ? "rgb(187,247,208)" : "rgb(254,202,202)",
                borderRadius: 10,
                padding: 14,
              }}
            >
              <strong>Erklaerung:</strong> {q.explain}
            </div>
          </div>
        )}
      </div>

      {/* Navigation unten */}
      <div className="section" style={{ display: "flex", gap: 10, justifyContent: "space-between" }}>
        <button
          onClick={goPrev}
          disabled={step === 0}
          className="btn btn-ghost"
          style={{ opacity: step === 0 ? 0.5 : 1 }}
        >
          Zurück
        </button>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={goNext}
            className="btn btn-primary"
            disabled={chosen[step] === null}
            style={{ opacity: chosen[step] === null ? 0.6 : 1 }}
          >
            {step === QUESTIONS.length - 1 ? "Fertig" : "Weiter"}
          </button>
        </div>
      </div>
    </main>
  );
}
