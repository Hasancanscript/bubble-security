"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Menü nach Navigation automatisch schliessen
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const nav = [
    { label: "Startseite", href: "/" },
    { label: "Kontaktformular", href: "/contact" },
    { label: "Über uns", href: "/about" },
    { label: "Entwickler", href: "/developers" },
  ];

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
        background:
          "linear-gradient(180deg, rgba(14,15,18,0.85), rgba(14,15,18,0.75))",
        borderBottom: "1px solid rgba(239,68,68,0.28)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        {/* Logo + Name */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <img
            src="/logo.png"
            onError={(e) => (e.currentTarget.src = "/logo.png")}
            alt="Bubble Security Logo"
            width={30}
            height={30}
            style={{
              objectFit: "contain",
              filter:
                "drop-shadow(0 4px 10px rgba(239,68,68,0.3))",
            }}
          />
          <span
            style={{
              fontWeight: 900,
              letterSpacing: 0.2,
            }}
          >
            <span style={{ color: "var(--red)" }}>Bubble</span>{" "}
            Security
          </span>
        </Link>

        {/* Desktop-Navigation */}
        <nav
          aria-label="Hauptnavigation"
          style={{
            display: "none",
          }}
          className="nav-desktop"
        >
          <ul
            style={{
              display: "flex",
              gap: 14,
              listStyle: "none",
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    padding: "8px 12px",
                    borderRadius: 999,
                    border: isActive(item.href)
                      ? "1px solid rgba(239,68,68,0.45)"
                      : "1px solid transparent",
                    background: isActive(item.href)
                      ? "rgba(239,68,68,0.12)"
                      : "transparent",
                    color: "var(--text)",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href))
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href))
                      e.currentTarget.style.background = "transparent";
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile: Burger */}
        <button
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "linear-gradient(180deg, #0b0c0f, #090a0d)",
          }}
          className="nav-burger"
        >
          <span style={{ fontSize: 18 }}>☰</span>
        </button>
      </div>

      {/* Mobile-Menü Dropdown */}
      {open && (
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "#0c0d10",
          }}
          className="nav-mobile"
        >
          <ul
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "10px 14px 14px",
              listStyle: "none",
              display: "grid",
              gap: 8,
            }}
          >
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: isActive(item.href)
                      ? "1px solid rgba(239,68,68,0.45)"
                      : "1px solid rgba(255,255,255,0.08)",
                    background: isActive(item.href)
                      ? "rgba(239,68,68,0.12)"
                      : "linear-gradient(180deg, #0b0c0f, #090a0d)",
                    color: "var(--text)",
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* kleine CSS-Regeln für Breakpoints */}
      <style jsx>{`
        @media (min-width: 820px) {
          .nav-desktop {
            display: block !important;
          }
          .nav-burger,
          .nav-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
