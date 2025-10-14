export const metadata = {
  title: "Netzwerk und Cloud Sicherheit | Bubble Security",
  description:
    "Zero Trust, sichere Konfigurationen in M365 Azure AWS und laufende Haertung für stabile und geschützte Umgebungen.",
};

export default function NetworkCloudLayout({ children }) {
  return (
    <section
      className="section"
      style={{ borderRadius: 18, display: "grid", gap: 16, maxWidth: 980, margin: "24px auto" }}
    >
      {children}
    </section>
  );
}
