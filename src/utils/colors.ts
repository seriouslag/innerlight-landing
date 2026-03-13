/**
 * Derives all CSS custom properties from three primary hex colors.
 * Returns an object suitable for use as a React inline style.
 */
export function deriveColorVars(
  navy: string,
  amber: string,
  cream: string,
): Record<string, string> {
  const r = parseInt(navy.slice(1, 3), 16);
  const g = parseInt(navy.slice(3, 5), 16);
  const b = parseInt(navy.slice(5, 7), 16);

  const ar = parseInt(amber.slice(1, 3), 16);
  const ag = parseInt(amber.slice(3, 5), 16);
  const ab = parseInt(amber.slice(5, 7), 16);

  const cr = parseInt(cream.slice(1, 3), 16);
  const cg = parseInt(cream.slice(3, 5), 16);
  const cb = parseInt(cream.slice(5, 7), 16);

  return {
    '--navy': navy,
    '--amber': amber,
    '--cream': cream,
    '--navy-deep': `rgb(${Math.max(0, r - 12)}, ${Math.max(0, g - 5)}, ${Math.max(0, b - 3)})`,
    '--navy-mid': `rgb(${Math.max(0, r - 6)}, ${Math.max(0, g - 6)}, ${Math.max(0, b - 22)})`,
    '--amber-glow': `rgba(${ar}, ${ag}, ${ab}, 0.15)`,
    '--cream-warm': `rgb(${Math.max(0, cr - 8)}, ${Math.max(0, cg - 9)}, ${Math.max(0, cb - 11)})`,
    '--cream-dark': `rgb(${Math.max(0, cr - 29)}, ${Math.max(0, cg - 31)}, ${Math.max(0, cb - 35)})`,
    '--navy-faint': `rgba(${r}, ${g}, ${b}, 0.4)`,
  };
}
