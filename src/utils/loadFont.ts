/**
 * Tracks which Google Font families have already been requested.
 * Prevents duplicate <link> injections across the session.
 */
const loadedFamilies = new Set<string>();

/**
 * Dynamically loads a Google Font by injecting a <link> stylesheet into <head>.
 * Safe to call multiple times with the same family — subsequent calls are no-ops.
 *
 * @param family - The exact Google Fonts family name, e.g. "Playfair Display"
 */
export function loadFont(family: string): void {
  if (loadedFamilies.has(family)) return;
  loadedFamilies.add(family);

  // Google Fonts CSS API v2 — request a broad weight range + italic axis
  const encoded = family.replace(/ /g, '+');
  const href = `https://fonts.googleapis.com/css2?family=${encoded}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap`;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}
