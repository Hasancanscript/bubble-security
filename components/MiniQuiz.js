"use client";
import { useEffect, useMemo, useState } from "react";

/**
 * props.questions = [
 *  { id, question, type: "single" | "boolean", options?: string[], correctIndex, explanation }
 * ]
 */
export default function MiniQuiz({ questions = [] }) {
  // 1) Mount-Status
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  // 2) Fragen immer gleich aufbereiten (Hook immer aufrufen)
  const q = useMemo(
    () =>
      questions.map((x) =>
        x.type === "boolean" ? { ...x, options: ["Ja", "Nein"] } : x
      ),
    [questions]
  );

  // 3) State für Antworten und Auswertung (Hooks immer aufrufen)
  const [answers, setAnswers] = useState(Array(q.length).fill(null));
  const [checked, setChecked] = useState(false);

  const select = (qi, oi) => {
    if (checked) return;
    const next = [...answers];
    next[qi] = oi;
    setAnswers(next);
  };

  const score = checked
    ? answers.reduce((acc, a, i) => acc + (a === q[i].correctIndex ? 1 : 0), 0)
    : 0;

  const reset = () => {
    setAnswers(Array(q.length).fill(null));
    setChecked(false);
  };

  const ui = palette();

  // 4) Vor dem ersten Client-Mount nichts anzeigen (aber Hooks oben schon ausgeführt)
  if (!ready) return null;

  return (
    <div
      style={{
        border: `1px solid ${ui.panelBorder}`,
        borderRadius: 14,
        padding: 16,
        background: ui.panelBg,
      }}
    >
      <h3 style={{ margin: "0 0 12px", fontWeight: 900, letterSpacing: 0.2 }}>
        Mini Quiz
      </h3>

      <ol style={{ margin: 0, paddingLeft: 18 }}>
        {q.map((item, qi) => {
          const isCorrect = checked && answers[qi] === item.correctIndex;
          const isWrong =
            checked && answers[qi] !== null && answers[qi] !== item.correctIndex;

          return (
            <li key={item.id} style={{ marginBottom: 18 }}>
              <div style={{ fontWeight: 800, marginBottom: 10, fontSize: 16 }}>
                {qi + 1}. {item.question}
              </div>

              <div style={{ display: "grid", gap: 10 }}>
                {item.options.map((opt, oi) => {
                  const selected = answers[qi] === oi;
                  const isRightOption = oi === item.correctIndex;

                  let bg = ui.optionBg;
                  let border = ui.optionBorder;
                  let txt = ui.optionText;

                  if (!checked && selected) {
                    bg = ui.optionSelectedBg;
                    border = ui.optionSelectedBorder;
                  }
                  if (checked) {
                    if (isRightOption) {
                      bg = ui.correctBg;
                      border = ui.correctBorder;
                      txt = ui.correctText;
                    } else if (selected) {
                      bg = ui.wrongBg;
                      border = ui.wrongBorder;
                      txt = ui.wrongText;
                    }
                  }

                  return (
                    <label
                      key={oi}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "12px 14px",
                        borderRadius: 12,
                        border: `2px solid ${border}`,
                        background: bg,
                        color: txt,
                        cursor: checked ? "default" : "pointer",
                        outline: "none",
                      }}
                    >
                      {/* echte Inputs für Tastatur und Screenreader */}
                      <input
                        type="radio"
                        name={`q${qi}`}
                        value={oi}
                        checked={answers[qi] === oi}
                        onChange={() => select(qi, oi)}
                        disabled={checked}
                        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
                      />
                      <span
                        aria-hidden
                        style={{
                          minWidth: 28,
                          height: 28,
                          borderRadius: 8,
                          display: "grid",
                          placeItems: "center",
                          fontWeight: 900,
                          background: selected ? ui.bulletActiveBg : ui.bulletBg,
                          color: selected ? ui.bulletActiveText : ui.bulletText,
                          border: `1px solid ${
                            selected ? ui.bulletActiveBorder : ui.bulletBorder
                          }`,
                        }}
                      >
                        {String.fromCharCode(65 + oi)}
                      </span>
                      <span style={{ lineHeight: 1.5, fontSize: 15 }}>{opt}</span>
                    </label>
                  );
                })}
              </div>

              {checked && (isCorrect || isWrong) && (
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    color: isCorrect ? ui.correctText : ui.wrongText,
                  }}
                >
                  {isCorrect ? "Richtig" : "Falsch"} {item.explanation}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div style={{ display: "flex", gap: 12, marginTop: 12, alignItems: "center" }}>
        <button
          onClick={() => setChecked(true)}
          className="btn btn-primary"
          disabled={checked || answers.some((a) => a === null)}
          style={{ padding: "10px 14px", fontWeight: 800 }}
        >
          Auswerten
        </button>
        <button onClick={reset} className="btn btn-ghost" style={{ padding: "10px 14px" }}>
          Zurücksetzen
        </button>

        {checked && (
          <div
            style={{
              marginLeft: "auto",
              fontWeight: 900,
              padding: "6px 10px",
              borderRadius: 10,
              background: ui.scoreBg,
              color: ui.scoreText,
              border: `1px solid ${ui.scoreBorder}`,
            }}
          >
            Punkte {score} von {q.length}
          </div>
        )}
      </div>
    </div>
  );
}

/** Dunkles Farbschema mit hoher Lesbarkeit */
function palette() {
  return {
    panelBg: "rgba(20,20,24,0.9)",
    panelBorder: "rgba(255,255,255,0.14)",
    optionBg: "rgba(255,255,255,0.08)",
    optionBorder: "rgba(255,255,255,0.28)",
    optionText: "rgba(255,255,255,0.95)",
    optionSelectedBg: "rgba(99,102,241,0.25)",
    optionSelectedBorder: "rgba(99,102,241,0.7)",
    correctBg: "rgba(22,163,74,0.24)",
    correctBorder: "rgba(22,163,74,0.85)",
    correctText: "rgb(187,247,208)",
    wrongBg: "rgba(239,68,68,0.22)",
    wrongBorder: "rgba(239,68,68,0.8)",
    wrongText: "rgb(254,202,202)",
    bulletBg: "rgba(255,255,255,0.12)",
    bulletBorder: "rgba(255,255,255,0.2)",
    bulletText: "rgba(255,255,255,0.85)",
    bulletActiveBg: "rgba(99,102,241,0.38)",
    bulletActiveBorder: "rgba(99,102,241,0.75)",
    bulletActiveText: "white",
    scoreBg: "rgba(23,23,28,0.6)",
    scoreBorder: "rgba(255,255,255,0.2)",
    scoreText: "rgba(255,255,255,0.95)",
  };
}
