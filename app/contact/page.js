// app/contact/page.js
"use client";

import { useEffect, useMemo, useRef, useState, cloneElement } from "react";

export default function ContactPage() {
  // Logo Grösse in px (kannst du anpassen)
  const LOGO_SIZE = 200;

  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    topic: "Allgemeine Anfrage",
    message: "",
    website: "", // Honeypot
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const topics = useMemo(
    () => [
      "Allgemeine Anfrage",
      "Security Check / Audit",
      "Awareness Training",
      "Incident / Notfall",
      "Sonstiges",
    ],
    []
  );

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Bitte deinen Namen angeben.";
    if (!values.email.trim()) e.email = "Bitte eine E Mail angeben.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Bitte eine gueltige E Mail eingeben.";
    if (!values.message.trim() || values.message.trim().length < 10)
      e.message =
        "Bitte kurz beschreiben wobei wir helfen koennen (min. 10 Zeichen).";
    if (values.website) e.website = "Spam erkannt.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    // <<< DEINE EMPFAENGER ADRESSE
    const recipient = "contact@bubble-security.example";
    const subject = encodeURIComponent(`[Kontakt] ${values.topic} | ${values.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `E Mail: ${values.email}`,
        `Unternehmen: ${values.company || "-"}`,
        `Thema: ${values.topic}`,
        "",
        "Nachricht:",
        values.message,
      ].join("\n")
    );

    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <main style={{ maxWidth: 1000, margin: "28px auto 34px", paddingInline: 14 }}>
      {/* Header */}
      <header
        className="section"
        style={{
          borderRadius: 22,
          marginBottom: 20,
          textAlign: "center",
          padding: "28px 16px 24px",
          background:
            "radial-gradient(95% 160% at 10% 0%, rgba(239,68,68,0.18) 0%, rgba(239,68,68,0.07) 40%, rgba(0,0,0,0.5) 100%), linear-gradient(135deg, rgba(239,68,68,0.14), rgba(0,0,0,0.55))",
          border: "1px solid rgba(239,68,68,0.42)",
          boxShadow: "0 18px 48px rgba(239,68,68,0.10)",
        }}
      >
        <LogoRow size={LOGO_SIZE} />
        <h1 style={{ margin: "6px 0 4px", fontSize: 34, fontWeight: 900 }}>
          Kontaktiere <span style={{ color: "var(--red)" }}>Bubble Security</span>
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 16, margin: 0 }}>
          Kurze Nachricht genuegt wir melden uns in der Regel innerhalb von 1 bis 2 Werktagen.
        </p>
      </header>

      {/* Formular / Erfolg */}
      {!sent ? (
        <section
          className="section"
          style={{
            borderRadius: 22,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
            overflow: "visible",
          }}
        >
          <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: 18 }}>
            {/* Zeile 1 */}
            <Row>
              <FormControl label="Name*" error={errors.name}>
                <input
                  type="text"
                  value={values.name}
                  onChange={onChange("name")}
                  placeholder="Max Muster"
                />
              </FormControl>

              <FormControl label="E Mail*" error={errors.email}>
                <input
                  type="email"
                  value={values.email}
                  onChange={onChange("email")}
                  placeholder="max@example.com"
                />
              </FormControl>
            </Row>

            {/* Zeile 2 */}
            <Row>
              <FormControl label="Unternehmen">
                <input
                  type="text"
                  value={values.company}
                  onChange={onChange("company")}
                  placeholder="(optional)"
                />
              </FormControl>

              <FormControl label="Thema">
                <CustomSelect
                  value={values.topic}
                  onChange={(val) => setValues((v) => ({ ...v, topic: val }))}
                  options={topics}
                />
              </FormControl>
            </Row>

            {/* Nachricht */}
            <FormControl label="Nachricht*" error={errors.message}>
              <textarea
                rows={9}
                value={values.message}
                onChange={onChange("message")}
                placeholder="Wobei duerfen wir helfen"
              />
            </FormControl>

            {/* Honeypot */}
            <div style={{ display: "none" }}>
              <FormControl label="Website" error={errors.website}>
                <input
                  value={values.website}
                  onChange={onChange("website")}
                  placeholder="Nicht ausfuellen"
                />
              </FormControl>
            </div>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 12,
                alignItems: "center",
              }}
            >
              <button
                type="submit"
                className="btn btn-primary"
                disabled={sending}
                style={{
                  height: 48,
                  paddingInline: 24,
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: sending ? 0.7 : 1,
                }}
              >
                {sending ? "Sende..." : "Nachricht senden"}
              </button>
              <a
                className="btn btn-ghost"
                href="/"
                style={{
                  height: 48,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingInline: 18,
                }}
              >
                Abbrechen
              </a>
            </div>

            <p style={{ color: "var(--muted)", fontSize: 12, margin: 0 }}>
              Mit dem Absenden erklaerst du dich einverstanden dass wir deine Angaben zur
              Beantwortung deiner Anfrage verarbeiten. Es findet kein automatischer Versand
              statt dein E Mail Programm oeffnet sich mit einer vorbefuellten Nachricht.
            </p>
          </form>
        </section>
      ) : (
        <section
          className="section"
          style={{
            borderRadius: 22,
            textAlign: "center",
            border: "1px solid rgba(34,197,94,0.45)",
            background: "rgba(34,197,94,0.10)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Danke für deine Nachricht</h2>
          <p style={{ color: "var(--text)" }}>
            Dein E Mail Programm öffnet sich gleich. Prüfe die Angaben und sende die Mail ab.
          </p>
          <a href="/" className="btn btn-primary" style={{ marginTop: 8 }}>
            Zurück zur Startseite
          </a>
        </section>
      )}
    </main>
  );
}

/* ----------------- Hilfs UI ----------------- */

function Row({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
        alignItems: "start",
      }}
    >
      {children}
    </div>
  );
}

function FormControl({ label, error, children }) {
  const child = Array.isArray(children) ? children[0] : children;
  const isTextarea = child?.type === "textarea";

  const baseStyle = {
    boxSizing: "border-box",
    width: "100%",
    height: isTextarea ? undefined : 54,
    padding: isTextarea ? "14px 16px" : "0 16px",
    fontSize: 16,
    color: "var(--text)",
    borderRadius: 16,
    border: "1.4px solid rgba(255,255,255,0.14)",
    background: "linear-gradient(180deg, #0b0c0f, #090a0d)",
    outline: "none",
    boxShadow: "inset 0 0 0 rgba(0,0,0,0)",
    transition: "border-color .15s ease, box-shadow .15s ease, background .15s ease",
    caretColor: "var(--red)",
  };

  const enhanced =
    child &&
    cloneElement(child, {
      style: { ...(child.props?.style || {}), ...baseStyle },
      onFocus: (e) => {
        e.currentTarget.style.boxShadow = "0 0 0 6px rgba(239,68,68,0.12)";
        e.currentTarget.style.borderColor = "rgba(239,68,68,0.55)";
        child.props?.onFocus && child.props.onFocus(e);
      },
      onBlur: (e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
        child.props?.onBlur && child.props.onBlur(e);
      },
    });

  return (
    <div>
      <label style={{ display: "block", fontWeight: 900, marginBottom: 8, letterSpacing: 0.2 }}>
        {label}
      </label>
      {enhanced}
      {error && (
        <div style={{ color: "rgb(248,113,113)", fontSize: 13, marginTop: 6 }}>{error}</div>
      )}
    </div>
  );
}

/* ---- Custom Select (dunkel kein weisses Menue) ---- */
function CustomSelect({ value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!btnRef.current?.contains(e.target) && !listRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          boxSizing: "border-box",
          width: "100%",
          height: 54,
          padding: "0 44px 0 16px",
          textAlign: "left",
          fontSize: 16,
          color: "var(--text)",
          borderRadius: 16,
          border: "1.4px solid rgba(255,255,255,0.14)",
          background: "linear-gradient(180deg, #0b0c0f, #090a0d)",
          position: "relative",
          outline: "none",
        }}
        onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 6px rgba(239,68,68,0.12)")}
        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        {value}
        <span
          aria-hidden
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.85,
          }}
        >
          ▼
        </span>
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 50,
            marginTop: 6,
            width: "100%",
            listStyle: "none",
            padding: 6,
            borderRadius: 14,
            background: "#0c0d10",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
            maxHeight: 260,
            overflowY: "auto",
          }}
        >
          {options.map((opt) => {
            const active = opt === value;
            return (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                    btnRef.current?.focus();
                  }}
                  role="option"
                  aria-selected={active}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 12px",
                    fontSize: 15,
                    borderRadius: 10,
                    background: active ? "rgba(239,68,68,0.14)" : "transparent",
                    color: "var(--text)",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = active ? "rgba(239,68,68,0.14)" : "transparent";
                  }}
                >
                  {opt}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ---- Logo (PNG only kein SVG Fallback) ---- */
function LogoRow({ size = 150 }) {
  // Direkt PNG verwenden → keine 404 im Terminal
  const displaySize = `min(${size}px, 42vw)`;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
      <img
        src="/logo.png"
        alt="Bubble Security Logo"
        width={size}
        height={size}
        style={{
          width: displaySize,
          height: displaySize,
          objectFit: "contain",
          filter:
            "drop-shadow(0 18px 40px rgba(239,68,68,0.32)) drop-shadow(0 4px 8px rgba(0,0,0,0.6))",
        }}
      />
    </div>
  );
}
