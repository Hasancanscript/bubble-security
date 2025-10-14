export default function Footer() {
  return (
    <footer className="border-t bg-white/70 backdrop-blur mt-10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Bubble Security – Alle Rechte vorbehalten.</p>
        <p className="text-gray-500">
          Sicherheit einfach erklärt. Schütze deine Daten, dein Team und dein Unternehmen.
        </p>
      </div>
    </footer>
  );
}
