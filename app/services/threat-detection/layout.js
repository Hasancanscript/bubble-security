export const metadata = {
  title: "Bedrohungserkennung und Reaktion | Bubble Security",
  description:
    "Monitoring, Alarmierung und Incident Response für schnelle Hilfe im Ernstfall.",
};

export default function ThreatDetectionLayout({ children }) {
  return (
    <section
      className="section"
      style={{ borderRadius: 18, display: "grid", gap: 16, maxWidth: 980, margin: "24px auto" }}
    >
      {children}
    </section>
  );
}
