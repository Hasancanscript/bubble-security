import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Bubble Security",
  description: "IT-Security einfach erklärt – Bubble Security",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-black text-gray-100 min-h-screen">
        {/* Flex-Layout: Footer bleibt unten */}
        <div className="relative min-h-screen flex flex-col">
          {/* Subtiles Hintergrund-Glow (dunkel/rot) */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 40% at 20% 0%, rgba(239,68,68,0.12), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,1))",
            }}
          />

          {/* Navigation */}
          <NavBar />

          {/* Inhalt füllt den Platz zwischen NavBar und Footer */}
          <main className="flex-1 w-full mx-auto max-w-6xl px-4 py-8">
            {children}
          </main>

          {/* Footer ist immer unten */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
