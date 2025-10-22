// app/api/lesson/[slug]/route.js

export async function GET(_req, { params }) {
  const slug = params.slug;

  const lesson = {
    slug,
    title: "Security Basics - 15 Fragen",
    questions: [
      // 1 ─ MC
      {
        id: "q1",
        type: "mc",
        prompt: "Welche Aktivität entfaltet Ransomware?",
        options: ["Sie verschlüsselt Daten", "Sie beschleunigt die CPU", "Sie vergrössert den Bildschirm"],
        answer: 0,
        hints: ["Denk an Erpressung", "Dateien sind nicht mehr lesbar"],
        explain: "Ransomware verschlüsselt Daten und fordert Lösegeld."
      },
      // 2 ─ TF
      {
        id: "q2",
        type: "tf",
        prompt: "Zwei-Faktor-Schutz erhöht Sicherheit.",
        answer: true,
        hints: ["Zweiter Schritt nach Passwort"],
        explain: "MFA fügt eine weitere Schutzebene hinzu."
      },
      // 3 ─ MC
      {
        id: "q3",
        type: "mc",
        prompt: "Was machst du mit unbekannten Anhängen in Mails?",
        options: ["Sofort öffnen", "Zuerst prüfen oder an IT melden", "An alle weiterleiten"],
        answer: 1,
        hints: ["Erst prüfen – dann handeln"],
        explain: "Unbekannte Anhänge nicht öffnen. Erst Quelle prüfen oder an IT melden."
      },
      // 4 ─ MC
      {
        id: "q4",
        type: "mc",
        prompt: "Was beschreibt „VPN“ am besten?",
        options: ["Offenes Gastnetz", "Verschlüsselter Tunnel", "Datei-Backup"],
        answer: 1,
        hints: ["Sichere Verbindung übers Netz"],
        explain: "VPN erstellt einen verschlüsselten Tunnel."
      },
      // 5 ─ MC
      {
        id: "q5",
        type: "mc",
        prompt: "Phishing-Verdacht: Was ist der erste Schritt?",
        options: ["Nicht klicken", "Passwort ändern", "Mail an Kolleg:innen weiterleiten"],
        answer: 0,
        hints: ["Schaden zuerst verhindern"],
        explain: "Nicht klicken; dann prüfen/melden."
      },
      // 6 ─ MC
      {
        id: "q6",
        type: "mc",
        prompt: "Was ist die robusteste Methode für Einmalcodes (2FA)?",
        options: ["SMS", "Authenticator-App", "E-Mail"],
        answer: 1,
        hints: ["Nicht leicht abfangbar"],
        explain: "Apps sind weniger angreifbar als SMS oder E-Mail."
      },
      // 7 ─ TF
      {
        id: "q7",
        type: "tf",
        prompt: "Ein öffentliches WLAN ist immer sicher.",
        answer: false,
        hints: ["Vorsicht bei sensiblen Logins"],
        explain: "Nutze VPN oder Mobilnetz für Wichtiges."
      },
      // 8 ─ MC
      {
        id: "q8",
        type: "mc",
        prompt: "Welcher WLAN-Standard ist aktuell am sichersten?",
        options: ["WEP", "WPA2", "WPA3"],
        answer: 2,
        hints: ["Nachfolger von WPA2"],
        explain: "WPA3 ist aktueller und sicherer als ältere Standards."
      },
      // 9 ─ MC
      {
        id: "q9",
        type: "mc",
        prompt: "Was beschreibt Social Engineering am besten?",
        options: ["Manipulation von Menschen", "Ausnutzen von Software-Fehlern", "Optimierung von Hardware"],
        answer: 0,
        hints: ["Gefühle und Stress ausnutzen"],
        explain: "Menschen werden zu unbedachten Handlungen verleitet."
      },
      // 10 ─ TF
      {
        id: "q10",
        type: "tf",
        prompt: "Passwörter im Klartext zu speichern ist unproblematisch.",
        answer: false,
        hints: ["Klartext bedeutet lesbar"],
        explain: "Passwörter müssen gehasht oder verschlüsselt gespeichert werden."
      },
      // 11 ─ MC
      {
        id: "q11",
        type: "mc",
        prompt: "Welche Massnahme macht Inhalte ohne Schlüssel unlesbar?",
        options: ["Protokollierung", "Verschlüsselung", "Anonymisierung"],
        answer: 1,
        hints: ["Schlüssel erforderlich"],
        explain: "Verschlüsselung schützt Daten vor unbefugtem Zugriff."
      },
      // 12 ─ MC (CH-Bezug)
      {
        id: "q12",
        type: "mc",
        prompt: "Welcher Link wirkt am verdächtigsten (Phishing)?",
        options: [
          "https://www.swisscom.ch/",
          "https://swisscom.com-security.net/login",
          "https://www.admin.ch/"
        ],
        answer: 1,
        hints: ["Achte auf die Hauptdomain"],
        explain: "Die echte Domain steht direkt vor dem ersten „/“. „swisscom.com-security.net“ ist eine täuschende Subdomain."
      },
      // 13 ─ MC
      {
        id: "q13",
        type: "mc",
        prompt: "Wie heisst das regelmässige Schliessen von Sicherheitslücken?",
        options: ["Tuning", "Patchen", "Backupen"],
        answer: 1,
        hints: ["Beginnt mit P"],
        explain: "Regelmässiges Patchen reduziert die Angriffsfläche deutlich."
      },
      // 14 ─ MC
      {
        id: "q14",
        type: "mc",
        prompt: "Ransomware-Befall: Was ist die beste erste Reaktion?",
        options: ["Netzwerk trennen/isolieren", "Backups sofort einspielen", "Lösegeld zahlen"],
        answer: 0,
        hints: ["Eindämmung zuerst"],
        explain: "System isolieren, dann IT/IR informieren, später Wiederherstellung."
      },
      // 15 ─ TF
      {
        id: "q15",
        type: "tf",
        prompt: "Ein sicheres Backup ist offline oder unveränderbar (immutable) abgelegt.",
        answer: true,
        hints: ["Air-Gap"],
        explain: "Offline oder immutable Backups können von Ransomware nicht einfach mitverschlüsselt werden."
      }
    ]
  };

  return Response.json(lesson);
}
