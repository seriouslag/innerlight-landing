/** Represents a selectable font option with its CSS family string and display label. */
export interface FontOption {
  /** Full CSS font-family value including fallbacks */
  value: string;
  /** Human-readable name shown in the picker */
  label: string;
}

/** Display/heading font choices. All loaded via Google Fonts in index.html. */
export const DISPLAY_FONTS: FontOption[] = [
  { value: "'Playfair Display', Georgia, serif", label: 'Playfair Display' },
  { value: "'Cormorant Garamond', Georgia, serif", label: 'Cormorant Garamond' },
  { value: "'DM Serif Display', Georgia, serif", label: 'DM Serif Display' },
  { value: "'Fraunces', Georgia, serif", label: 'Fraunces' },
  { value: "'Libre Baskerville', Georgia, serif", label: 'Libre Baskerville' },
];

/** Body/contact font choices. All loaded via Google Fonts in index.html. */
export const BODY_FONTS: FontOption[] = [
  { value: "'DM Sans', -apple-system, sans-serif", label: 'DM Sans' },
  { value: "'Inter', -apple-system, sans-serif", label: 'Inter' },
  { value: "'Jost', -apple-system, sans-serif", label: 'Jost' },
  { value: "'Outfit', -apple-system, sans-serif", label: 'Outfit' },
];

/** Default display font CSS value. */
export const DEFAULT_FONT_DISPLAY = DISPLAY_FONTS[0].value;

/** Default body font CSS value. */
export const DEFAULT_FONT_BODY = BODY_FONTS[0].value;
