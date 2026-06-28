// Real Google reviews. Paste verbatim from the center's Google profile — do NOT invent.
// Leave empty until real reviews are available; the section shows a CTA when empty.
export interface Review {
  name: string;
  role?: string; // e.g. "Madre de alumno de Bachillerato" (optional)
  content: string;
  rating: number; // 1–5, as left on Google
}

export const REVIEWS: Review[] = [
  // {
  //   name: "Nombre real",
  //   role: "Madre de alumno",
  //   content: "Texto literal de la reseña de Google…",
  //   rating: 5,
  // },
];

// TODO: replace with the center's real Google profile URLs.
// VIEW: share link of the Google Maps place (Reseñas tab).
// WRITE: direct "write a review" link → https://search.google.com/local/writereview?placeid=PLACE_ID
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Estells%20Centre%20d'Estudis%20Alginet";
export const GOOGLE_WRITE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Estells%20Centre%20d'Estudis%20Alginet";
