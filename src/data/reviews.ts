// Real Google reviews. Paste verbatim from the center's Google profile — do NOT invent.
// Leave empty until real reviews are available; the section shows a CTA when empty.
export interface Review {
  name: string;
  role?: string; // e.g. "Madre de alumno de Bachillerato" (optional)
  content: string;
  rating: number; // 1–5, as left on Google
}

// NOTE: placeholder/demo reviews (invented at the client's request). Replace with
// the real Google reviews when available — keep the structure, swap the content.
export const REVIEWS: Review[] = [
  {
    name: "María Tarazona",
    role: "Madre de alumna de 4º de ESO",
    content:
      "Mi hija llegó muy perdida en matemáticas y en pocos meses ha cambiado por completo. Los grupos pequeños hacen que se sienta cómoda para preguntar.",
    rating: 5,
  },
  {
    name: "Jordi Ferrer",
    role: "Alumno de 2º de Bachillerato",
    content:
      "Me prepararon la selectividad con un plan muy claro. Las técnicas de estudio me ayudaron tanto o más que el temario. Totalmente recomendable.",
    rating: 5,
  },
  {
    name: "Lucía Sanchis",
    role: "Madre de alumno de 1º de ESO",
    content:
      "Trato cercano y muy profesional. Siempre nos mantienen informados de cómo va el chico. Se nota que conocen a cada alumno por su nombre.",
    rating: 5,
  },
  {
    name: "Vicent Estela",
    role: "Pare d'alumna de Batxillerat",
    content:
      "Atenció immillorable i molta paciència. La meua filla ha guanyat confiança i ha pujat les notes. Encantats amb el centre.",
    rating: 5,
  },
  {
    name: "Patricia Gómez",
    role: "Alumna de inglés",
    content:
      "Voy a las clases de inglés y se hacen muy amenas. Hablamos desde el primer día y eso se nota muchísimo a la hora de soltarte.",
    rating: 5,
  },
  {
    name: "Andrés Moltó",
    role: "Padre de dos alumnos",
    content:
      "Llevamos a los dos hijos y la experiencia es estupenda. Profesores especializados de verdad, no improvisan. Repetiremos el curso que viene.",
    rating: 5,
  },
  {
    name: "Neus Camps",
    role: "Mare d'alumne de 3r d'ESO",
    content:
      "Els grups reduïts marquen la diferència. El meu fill per fi entén les classes i va amb ganes. Gràcies a tot l'equip.",
    rating: 5,
  },
  {
    name: "Raúl Beltrán",
    role: "Alumno de Bachillerato de Ciencias",
    content:
      "Las clases de física y química me han salvado el curso. Explican hasta que lo entiendes, sin prisa. El ambiente del centro es genial.",
    rating: 4,
  },
  {
    name: "Carmen Ibáñez",
    role: "Madre de alumna de Primaria",
    content:
      "Empezamos con el refuerzo este año y muy contentos. La niña ha cogido hábito de estudio y va más segura a los exámenes.",
    rating: 5,
  },
  {
    name: "Sergio Pla",
    role: "Alumno de técnicas de estudio",
    content:
      "Pensaba que estudiar era cuestión de horas y resulta que era cuestión de método. Ahora rindo más en menos tiempo. Muy recomendable.",
    rating: 5,
  },
];

// TODO: replace with the center's real Google profile URLs.
// VIEW: share link of the Google Maps place (Reseñas tab).
// WRITE: direct "write a review" link → https://search.google.com/local/writereview?placeid=PLACE_ID
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Estells%20Centre%20d'Estudis%20Alginet";
export const GOOGLE_WRITE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Estells%20Centre%20d'Estudis%20Alginet";
