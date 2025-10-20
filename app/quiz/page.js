"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";

const RULES = Object.freeze({
  START_HEARTS: 5,
  XP_CORRECT: 10,
});

const PDF_LOGO_PATH_PRIMARY = "/report-logo.png";
const PDF_LOGO_PATH_FALLBACK = "/logo.png";

export default function QuizPage() {
  const [loading, setLoading] = useState(true);
  const [lesson, setLesson] = useState(null);
  const [index, setIndex] = useState(0);
  const [hearts, setHearts] = useState(RULES.START_HEARTS);
  const [xpSession, setXpSession] = useState(0);
  const [streak, setStreak] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [answers, setAnswers] = useState([]); // [{id, correct, user}]
  const [ended, setEnded] = useState(false);
  const [toast, setToast] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const slug = "security-basics-1";
  const q = lesson?.questions?.[index];
  const total = lesson?.questions?.length ?? 0;
  const progress = total ? index + 1 : 0;

  useEffect(() => {
    setReducedMotion(
      typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/lesson/${slug}`, { cache: "no-store" });
        const data = await res.json();
        data.questions = data.questions.map((qq, i) => ({
          indexLabel: `${i + 1}/${data.questions.length}`,
          ...qq,
        }));
        setLesson(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1000);
    return () => clearTimeout(t);
  }, [toast]);

  function onAnswer(result) {
    const nextAnswers = [...answers, { id: q.id, correct: result.correct, user: result.user }];
    setAnswers(nextAnswers);

    let nextHearts = hearts;
    if (result.correct) {
      setXpSession((x) => x + RULES.XP_CORRECT);
      setStreak((s) => s + 1);
      setToast({ type: "success", msg: "Richtig! +10 XP" });
    } else {
      setHearts((prev) => {
        nextHearts = prev - 1;
        return nextHearts;
      });
      if (nextHearts === hearts) nextHearts = hearts - 1;
      setStreak(0);
      setToast({ type: "error", msg: "Falsch! −1 Herz" });
    }

    const isLast = index + 1 >= total;
    const heartsAfter = result.correct ? hearts : nextHearts;

    const goNext = () => {
      if (heartsAfter <= 0 || isLast) setEnded(true);
      else setIndex((i) => i + 1);
    };

    if (reducedMotion) goNext(); else setTimeout(goNext, 250);
  }

  async function finishSession() {
    try {
      await fetch("/api/attempt", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          lessonSlug: lesson?.slug,
          xpEarned: xpSession,
          correctCount: answers.filter((a) => a.correct).length,
          total,
          heartsLeft: hearts,
          streakDelta: streak,
          finished: true,
          answers,
          hintsUsed,
        }),
      });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (ended) finishSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ended]);

  function restart() {
    setIndex(0);
    setHearts(RULES.START_HEARTS);
    setXpSession(0);
    setStreak(0);
    setHintsUsed(0);
    setAnswers([]);
    setEnded(false);
    setToast(null);
    setShowIntro(true);
  }

  /* =======================
     PDF GENERATOR
     ======================= */
  async function downloadPdf() {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const M = 56;
    let y = M;

    y += await addCenteredLogo(doc, y, pageW);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Bubble Security – Quiz Report", M, y + 6);
    y += 22;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor("#666666");
    doc.text(new Date().toLocaleString(), M, y);
    doc.setTextColor("#000000");
    y += 18;

    drawDivider(doc, M, y, pageW - M * 2); y += 12;

    const correctCount = answers.filter((a) => a.correct).length;
    const pct = total ? Math.round((correctCount / total) * 100) : 0;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Zusammenfassung", M, y); y += 14;

    y = drawSummaryTable(doc, M, y, [
      ["Lektion", lesson?.title ?? "-"],
      ["Fragen", String(total)],
      ["Richtig", `${correctCount} (${pct}%)`],
      ["XP", String(xpSession)],
      ["Herzen übrig", String(hearts)],
      ["Streak", String(streak)],
    ], pageW - M * 2, pageH);

    y += 10;
    drawDivider(doc, M, y, pageW - M * 2); y += 18;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Fragen & Antworten", M, y); y += 16;

    lesson?.questions?.forEach((qq, i) => {
      if (y > pageH - 120) { doc.addPage(); y = M; }

      // Frage
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      const qLines = doc.splitTextToSize(`${i + 1}. ${qq.prompt}`, pageW - M * 2);
      doc.text(qLines, M, y); y += qLines.length * 14;

      // Optionen (MC als Bullet-Liste – keine 1/2/3 Nummerierung)
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      if (qq.type === "mc") {
        const bulletLines = qq.options.map((opt) => `• ${opt}`);
        doc.text(bulletLines, M, y);
        y += bulletLines.length * 14;
      }
      if (qq.type === "tf") {
        doc.text("Optionen: Wahr  |  Falsch", M, y); y += 14;
      }

      const a = answers[i];
      const correct = a?.correct === true;
      const userText = formatUserAnswer(qq, a?.user);
      const rightText = correctAnswerText(qq);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(correct ? "#0a7a55" : "#c53333");
      doc.text(`Status: ${correct ? "Richtig ✓" : "Falsch ✗"}`, M, y);
      doc.setTextColor("#000000");
      y += 14;

      doc.setFont("helvetica", "normal");
      const ua = doc.splitTextToSize(`Deine Antwort: ${userText}`, pageW - M * 2);
      doc.text(ua, M, y); y += ua.length * 14;

      const ra = doc.splitTextToSize(`Richtige Antwort: ${rightText}`, pageW - M * 2);
      doc.text(ra, M, y); y += ra.length * 14;

      if (qq.explain) {
        doc.setFont("helvetica", "italic");
        const ex = doc.splitTextToSize(`Erklärung: ${qq.explain}`, pageW - M * 2);
        doc.text(ex, M, y); y += ex.length * 14;
      }

      y += 6;
      drawDivider(doc, M, y, pageW - M * 2); y += 16;
    });

    drawFooterPageNumber(doc);

    doc.save(
      `BubbleSecurity_Quiz_${lesson?.slug ?? "lesson"}_${new Date()
        .toISOString()
        .slice(0, 10)}.pdf`
    );
  }

  function drawDivider(doc, x, y, w) {
    doc.setDrawColor(220);
    doc.line(x, y, x + w, y);
  }
  function drawSummaryTable(doc, x, y, rows, width, pageH) {
    const col1 = 160;
    doc.setFontSize(11);
    rows.forEach(([label, value]) => {
      if (y > pageH - 80) { doc.addPage(); y = 56; }
      doc.setFont("helvetica", "bold");
      doc.text(String(label).toUpperCase(), x, y);
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(String(value), width - col1);
      doc.text(lines, x + col1, y);
      y += lines.length * 14;
    });
    return y;
  }
  function drawFooterPageNumber(doc) {
    const totalPages = doc.getNumberOfPages();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      doc.setTextColor("#777777");
      doc.text(`${i} / ${totalPages}`, pageW - 56, pageH - 28, { align: "right" });
    }
    doc.setTextColor("#000000");
  }

  async function addCenteredLogo(doc, y, pageW) {
    try {
      let data = await loadImageData(PDF_LOGO_PATH_PRIMARY);
      if (!data) data = await loadImageData(PDF_LOGO_PATH_FALLBACK);
      if (!data) return 0;

      const maxW = 320;
      const maxH = 120;
      const { dataUrl, w, h } = data;

      let drawW = maxW;
      let drawH = (h / w) * drawW;
      if (drawH > maxH) { drawH = maxH; drawW = (w / h) * drawH; }

      const x = (pageW - drawW) / 2;
      doc.addImage(dataUrl, "PNG", x, y, drawW, drawH);
      return drawH + 18;
    } catch {
      return 0;
    }
  }

  async function loadImageData(path) {
    try {
      const url = new URL(path, window.location.origin).toString();
      const img = await loadImage(url);
      const can = document.createElement("canvas");
      can.width = img.naturalWidth;
      can.height = img.naturalHeight;
      const ctx = can.getContext("2d");
      ctx.drawImage(img, 0, 0);
      return { dataUrl: can.toDataURL("image/png"), w: can.width, h: can.height };
    } catch {
      return null;
    }
  }
  function loadImage(src) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => res(img);
      img.onerror = rej;
      img.src = src;
    });
  }
  function formatUserAnswer(q, user) {
    if (user == null) return "-";
    if (q.type === "mc") return typeof user === "number" ? (q.options[user] ?? String(user)) : String(user);
    if (q.type === "tf") return user ? "Wahr" : "Falsch";
    return String(user);
  }
  function correctAnswerText(q) {
    if (q.type === "mc") return q.options?.[q.answer] ?? "";
    if (q.type === "tf") return q.answer ? "Wahr" : "Falsch";
    return "";
  }

  if (loading) {
    return (
      <div className="grid place-items-center gap-3">
        <div className="animate-pulse text-sm text-gray-400">Lektion wird geladen ...</div>
      </div>
    );
  }

  /* Intro ohne Doppel-Bullet, ohne Fachbegriff ARIA */
  if (showIntro) {
    return (
      <section className="duo-shell" aria-labelledby="intro-title">
        <div className="duo-card" role="dialog" aria-modal="true" aria-describedby="intro-desc">
          <h1 id="intro-title" className="duo-title">Quiz „Security Basics“</h1>
          <p id="intro-desc" className="text-sm text-gray-300 mb-4">
            Kurze, spielerische Runde zu IT-Security. Sammle XP, halte deine Serie und verliere keine Herzen.
          </p>

          <ul className="list-disc pl-5 text-sm text-gray-200 space-y-2 mb-4">
            <li><b>Fragetypen:</b> Multiple Choice & Wahr/Falsch</li>
            <li><b>Regeln:</b> richtig = +10 XP, falsch = −1 Herz (Start {RULES.START_HEARTS} Herzen)</li>
            <li><b>Fortschritt:</b> {lesson?.questions?.length ?? 0} Fragen, sofortiges Feedback</li>
            <li><b>Am Schluss:</b> Ergebnisse als <b>PDF</b> herunterladen (mit Logo)</li>
            <li><b>Barrierefrei:</b> Tastaturbedienung & screenreader-kompatibel; „Bewegung reduzieren“ wird respektiert</li>
          </ul>

          <div className="flex items-center gap-4 text-sm text-gray-300 mb-5">
            <span>❤️ {RULES.START_HEARTS} Herzen</span>
            <span>•</span>
            <span>🔥 Streak</span>
            <span>•</span>
            <span>⭐ XP pro richtig: {RULES.XP_CORRECT}</span>
          </div>

          <div className="duo-footer">
            <Link className="ghost" href="/">Abbrechen</Link>
            <button
              className="primary"
              autoFocus
              onClick={() => setShowIntro(false)}
              aria-label="Quiz starten"
            >
              Quiz starten
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (ended) {
    const correctCount = answers.filter((a) => a.correct).length;
    const pct = total ? Math.round((correctCount / total) * 100) : 0;
    return (
      <section className="section" aria-labelledby="summary-title">
        <h1 id="summary-title" className="text-2xl font-extrabold mb-3">
          Session-Zusammenfassung
        </h1>

        <div className="grid gap-3 sm:grid-cols-2">
          <SummaryStat label="XP gesamt" value={xpSession} />
          <SummaryStat label="Trefferquote" value={`${pct}%`} />
          <SummaryStat label="Herzen übrig" value={hearts} />
          <SummaryStat label="Streak" value={streak} />
        </div>

        <Badges pct={pct} streak={streak} />
        {!reducedMotion && <ConfettiLite key={`confetti-${pct}`} />}

        <div className="mt-5 flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={restart}>Wiederholen</button>
          <button className="btn btn-ghost" onClick={() => downloadPdf().catch(console.error)}>
            PDF herunterladen
          </button>
          <Link className="btn btn-ghost" href="/">Zur Startseite</Link>
        </div>

        <div className="mt-6">
          <h2 className="font-bold mb-2">Lernpunkte</h2>
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
            {lesson.questions.map((qq, i) => {
              const a = answers[i];
              if (!a || a.correct) return null;
              return (
                <li key={qq.id}>
                  <b className="text-gray-100">{qq.prompt}</b> – {qq.explain}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }

  const progressPct = total ? Math.max(0, Math.min(100, (progress / total) * 100)) : 0;

  return (
    <div className="duo-shell" aria-labelledby="quiz-title">
      <div className="duo-topbar" role="navigation" aria-label="Sitzungsanzeige">
        <Link href="/" className="duo-close" aria-label="Zurück zur Startseite">✕</Link>
        <div className="duo-progress" aria-label={`Fortschritt ${progress}/${total}`}>
          <span style={{ width: `${progressPct}%` }} />
        </div>
        <div className="duo-hearts" aria-label={`${hearts} Herzen übrig`}>
          <span>❤️</span>
          <span className="count">{hearts}</span>
        </div>
      </div>

      <div className="duo-card" aria-live="polite">
        <div className="duo-sub">Frage {q.indexLabel}</div>
        <h1 id="quiz-title" className="duo-title">{lesson?.title ?? "Quiz"}</h1>
        <h2 className="text-lg font-bold mb-3">{q.prompt}</h2>

        <HintPopover hints={q.hints} onUseHint={() => setHintsUsed((n) => n + 1)} />

        {q.type === "mc" && (
          <div className="duo-options">
            {q.options.map((opt, i) => (
              <button
                key={i}
                className="duo-option"
                data-first={i === 0 ? "true" : undefined}
                aria-label={`Antwort ${i + 1}: ${opt}`}
                onClick={() => onAnswer({ correct: i === q.answer, user: i })}
              >
                <span className="font-mono mr-2">{i + 1}.</span> {opt}
              </button>
            ))}
          </div>
        )}

        {q.type === "tf" && (
          <div className="duo-options">
            <button className="duo-option" data-first onClick={() => onAnswer({ correct: q.answer === true, user: true })}>Wahr</button>
            <button className="duo-option" onClick={() => onAnswer({ correct: q.answer === false, user: false })}>Falsch</button>
          </div>
        )}

        <div className="duo-footer">
          <Link className="ghost" href="/">Später</Link>
          <button className="primary" onClick={() => {}} aria-disabled>
            Überprüfen
          </button>
        </div>
      </div>

      <ResultToast toast={toast} />
    </div>
  );
}

/* ====== HILFS-KOMPONENTEN ====== */

function HintPopover({ hints = [], onUseHint }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  if (!hints?.length) return null;

  function next() {
    onUseHint?.();
    setOpen(true);
    setIdx((i) => Math.min(i + 1, hints.length - 1));
  }

  return (
    <div className="mb-3">
      {open && (
        <div
          className="text-sm text-gray-300 bg-black/40 border border-white/10 p-2 rounded"
          role="status"
        >
          Tipp: {hints[idx]}
        </div>
      )}
      {idx < hints.length && (
        <button className="btn btn-ghost mt-2" data-hint onClick={next}>
          Hinweis anzeigen ({idx + 1}/{hints.length})
        </button>
      )}
    </div>
  );
}

function ResultToast({ toast }) {
  const regionRef = useRef(null);
  useEffect(() => {
    if (toast && regionRef.current) regionRef.current.focus();
  }, [toast]);
  if (!toast) return null;
  return (
    <div
      className="fixed bottom-4 right-4 bg-black/70 border border-white/10 rounded px-4 py-2 shadow"
      role="status"
      tabIndex={-1}
      ref={regionRef}
      aria-live="assertive"
    >
      {toast.type === "success" ? "✅" : "❌"} {toast.msg}
    </div>
  );
}

function SummaryStat({ label, value }) {
  return (
    <div className="quiz-card p-3">
      <div className="text-[12px] uppercase tracking-wide text-gray-400">{label}</div>
      <div className="text-xl font-extrabold">{value}</div>
    </div>
  );
}

function Badges({ pct, streak }) {
  const list = useMemo(() => {
    const arr = [];
    if (pct === 100) arr.push({ name: "Perfekte Runde", emoji: "🏅" });
    if (pct >= 80) arr.push({ name: "Sicherheitsprofi", emoji: "🛡️" });
    if (streak >= 5) arr.push({ name: "Hot Streak 5+", emoji: "🔥" });
    if (arr.length === 0) arr.push({ name: "Erste Schritte", emoji: "🎯" });
    return arr;
  }, [pct, streak]);
  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">Abzeichen</h3>
      <div className="flex flex-wrap gap-2">
        {list.map((b) => (
          <div key={b.name} className="quiz-card px-3 py-2 flex items-center gap-2">
            <span>{b.emoji}</span>
            <span className="font-semibold">{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfettiLite() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 97) % 100}%`,
            top: -10,
            fontSize: 16,
            animation: `fall ${(8 + (i % 5))}s linear ${(i % 10) * 0.2}s`,
          }}
        >
          🎉
        </span>
      ))}
      <style>{`@keyframes fall{to{transform:translateY(110vh) rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){span{animation:none!important}}`}</style>
    </div>
  );
}
