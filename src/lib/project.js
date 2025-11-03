// src/lib/projects.js
import meisterbetrieb from "../assets/projects/meisterbetrieb.png";
import renov from "../assets/projects/renov.png";
import renov2 from "../assets/projects/renov2.png";
import tierpflege from "../assets/projects/tierpflege.png";
import garten from "../assets/projects/garten.png";
import project6 from "../assets/projects/project6.png";

const projects = [
  {
    title: "KFZ-Service • Meisterbetrieb",
    description:
      "Landingpage für einen KFZ-Meisterbetrieb: Inspektion, Service & Reparatur für alle Marken, digitale Transparenz, HU/AU, E-Autos. Schnelle Terminbuchung, Werkstattersatzwagen & Expressservice.",
    image: meisterbetrieb,
    tech: ["react", "astro", "tailwind"],
  },
  {
    title: "Renovierung & Innenausbau — helles Layout",
    description:
      "Startseite für Renovierungsbetrieb mit klarer Typo, ‚Kostenlose Anfrage‘-CTA, Über-uns-Block, Galerie und Leistungsübersicht. Vertrauensfaktoren: 15+ Jahre, 500+ Projekte, 98% Zufriedenheit.",
    image: renov,
    tech: ["react", "astro", "tailwind"],
  },
  {
    title: "Renovierung & Innenausbau — dunkles Layout",
    description:
      "Hero mit Vorher/Nachher-Slider, Projects-Preview, sekundärem CTA ‚Projekte ansehen‘ und Top-Navigation (Startseite, Leistungen, Projekte, Kalkulator, Kontakt). Fokus auf Lead-Erfassung.",
    image: renov2,
    tech: ["react", "astro", "tailwind"],
  },
  {
    title: "Tierpflege & Grooming",
    description:
      "Emotionale Service-Seite mit warmen Verläufen, sanftem Grooming-Wording, Online-Buchung in 3 Schritten und Vorteilen (ärztliche Kontrolle, Premium-Kosmetik, Karten­zahlung).",
    image: tierpflege,
    tech: ["react", "astro", "tailwind", "docker"],
  },
  {
    title: "Smart Garden 2025 • SaaS Dashboard",
    description:
      "Produkt-Landing für IoT-Gartenlösung: Metriken (Water Used, Watering Time, Active Zones), Charts zu Water Usage, CTA ‚Jetzt starten‘ / ‚Demo‘, Nutzenargumente (bis zu 30% weniger Wasser, 98% Empfehlung).",
    image: garten,
    tech: ["react", "astro", "tailwind"],
  },
  {
    title: "One-Page Template • Business",
    description:
      "Kompakter One-Pager mit Hero-CTA, Leistungs-Kacheln, Preiskarten, FAQ und Kontaktformular. Optimiert für schnelle Ladezeiten & Conversion.",
    image: project6,
    tech: ["react"],
  },
];

export default projects;
