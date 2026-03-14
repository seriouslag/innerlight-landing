/** Represents a selectable Google Font option. */
export interface FontOption {
  /** Google Fonts family name, e.g. "Playfair Display". Used to build the loader URL. */
  family: string;
  /** Full CSS font-family value including category fallbacks */
  cssValue: string;
  /** Font category for grouping in the picker */
  category: 'serif' | 'sans-serif' | 'display' | 'handwriting' | 'monospace';
}

/** All available fonts. Loaded dynamically on demand via loadFont(). */
export const ALL_FONTS: FontOption[] = [
  // ── Serif ──────────────────────────────────────────────────────────────────
  { family: 'Playfair Display',    cssValue: "'Playfair Display', Georgia, serif",    category: 'serif' },
  { family: 'Cormorant Garamond',  cssValue: "'Cormorant Garamond', Georgia, serif",  category: 'serif' },
  { family: 'DM Serif Display',    cssValue: "'DM Serif Display', Georgia, serif",    category: 'serif' },
  { family: 'Fraunces',            cssValue: "'Fraunces', Georgia, serif",            category: 'serif' },
  { family: 'Libre Baskerville',   cssValue: "'Libre Baskerville', Georgia, serif",   category: 'serif' },
  { family: 'Merriweather',        cssValue: "'Merriweather', Georgia, serif",        category: 'serif' },
  { family: 'EB Garamond',         cssValue: "'EB Garamond', Georgia, serif",         category: 'serif' },
  { family: 'Lora',                cssValue: "'Lora', Georgia, serif",                category: 'serif' },
  { family: 'Source Serif 4',      cssValue: "'Source Serif 4', Georgia, serif",      category: 'serif' },
  { family: 'Cardo',               cssValue: "'Cardo', Georgia, serif",               category: 'serif' },
  { family: 'Crimson Text',        cssValue: "'Crimson Text', Georgia, serif",        category: 'serif' },
  { family: 'Spectral',            cssValue: "'Spectral', Georgia, serif",            category: 'serif' },
  { family: 'Vollkorn',            cssValue: "'Vollkorn', Georgia, serif",            category: 'serif' },
  { family: 'Gilda Display',       cssValue: "'Gilda Display', Georgia, serif",       category: 'serif' },
  { family: 'Philosopher',         cssValue: "'Philosopher', Georgia, serif",         category: 'serif' },
  { family: 'Bodoni Moda',         cssValue: "'Bodoni Moda', Georgia, serif",         category: 'serif' },
  { family: 'Cinzel',              cssValue: "'Cinzel', Georgia, serif",              category: 'serif' },
  { family: 'Marcellus',           cssValue: "'Marcellus', Georgia, serif",           category: 'serif' },
  { family: 'Josefin Slab',        cssValue: "'Josefin Slab', Georgia, serif",        category: 'serif' },
  { family: 'Gentium Plus',        cssValue: "'Gentium Plus', Georgia, serif",        category: 'serif' },
  { family: 'Brygada 1918',        cssValue: "'Brygada 1918', Georgia, serif",        category: 'serif' },

  // ── Sans Serif ─────────────────────────────────────────────────────────────
  { family: 'DM Sans',             cssValue: "'DM Sans', -apple-system, sans-serif",             category: 'sans-serif' },
  { family: 'Inter',               cssValue: "'Inter', -apple-system, sans-serif",               category: 'sans-serif' },
  { family: 'Jost',                cssValue: "'Jost', -apple-system, sans-serif",                category: 'sans-serif' },
  { family: 'Outfit',              cssValue: "'Outfit', -apple-system, sans-serif",              category: 'sans-serif' },
  { family: 'Plus Jakarta Sans',   cssValue: "'Plus Jakarta Sans', -apple-system, sans-serif",   category: 'sans-serif' },
  { family: 'Nunito',              cssValue: "'Nunito', -apple-system, sans-serif",              category: 'sans-serif' },
  { family: 'Nunito Sans',         cssValue: "'Nunito Sans', -apple-system, sans-serif",         category: 'sans-serif' },
  { family: 'Poppins',             cssValue: "'Poppins', -apple-system, sans-serif",             category: 'sans-serif' },
  { family: 'Raleway',             cssValue: "'Raleway', -apple-system, sans-serif",             category: 'sans-serif' },
  { family: 'Rubik',               cssValue: "'Rubik', -apple-system, sans-serif",               category: 'sans-serif' },
  { family: 'Work Sans',           cssValue: "'Work Sans', -apple-system, sans-serif",           category: 'sans-serif' },
  { family: 'Open Sans',           cssValue: "'Open Sans', -apple-system, sans-serif",           category: 'sans-serif' },
  { family: 'Lato',                cssValue: "'Lato', -apple-system, sans-serif",                category: 'sans-serif' },
  { family: 'Montserrat',          cssValue: "'Montserrat', -apple-system, sans-serif",          category: 'sans-serif' },
  { family: 'Mulish',              cssValue: "'Mulish', -apple-system, sans-serif",              category: 'sans-serif' },
  { family: 'Cabin',               cssValue: "'Cabin', -apple-system, sans-serif",               category: 'sans-serif' },
  { family: 'Urbanist',            cssValue: "'Urbanist', -apple-system, sans-serif",            category: 'sans-serif' },
  { family: 'Be Vietnam Pro',      cssValue: "'Be Vietnam Pro', -apple-system, sans-serif",      category: 'sans-serif' },
  { family: 'Barlow',              cssValue: "'Barlow', -apple-system, sans-serif",              category: 'sans-serif' },
  { family: 'IBM Plex Sans',       cssValue: "'IBM Plex Sans', -apple-system, sans-serif",       category: 'sans-serif' },
  { family: 'Karla',               cssValue: "'Karla', -apple-system, sans-serif",               category: 'sans-serif' },
  { family: 'Lexend',              cssValue: "'Lexend', -apple-system, sans-serif",              category: 'sans-serif' },
  { family: 'Manrope',             cssValue: "'Manrope', -apple-system, sans-serif",             category: 'sans-serif' },
  { family: 'Onest',               cssValue: "'Onest', -apple-system, sans-serif",               category: 'sans-serif' },
  { family: 'Sora',                cssValue: "'Sora', -apple-system, sans-serif",                category: 'sans-serif' },

  // ── Display ────────────────────────────────────────────────────────────────
  { family: 'Bebas Neue',          cssValue: "'Bebas Neue', Impact, sans-serif",          category: 'display' },
  { family: 'Oswald',              cssValue: "'Oswald', Impact, sans-serif",              category: 'display' },
  { family: 'Teko',                cssValue: "'Teko', Impact, sans-serif",                category: 'display' },
  { family: 'Barlow Condensed',    cssValue: "'Barlow Condensed', Impact, sans-serif",    category: 'display' },
  { family: 'Exo 2',               cssValue: "'Exo 2', -apple-system, sans-serif",        category: 'display' },
  { family: 'Russo One',           cssValue: "'Russo One', Impact, sans-serif",           category: 'display' },
  { family: 'Righteous',           cssValue: "'Righteous', Impact, sans-serif",           category: 'display' },
  { family: 'Anton',               cssValue: "'Anton', Impact, sans-serif",               category: 'display' },
  { family: 'Alfa Slab One',       cssValue: "'Alfa Slab One', Georgia, serif",           category: 'display' },
  { family: 'Patua One',           cssValue: "'Patua One', Georgia, serif",               category: 'display' },

  // ── Handwriting ────────────────────────────────────────────────────────────
  { family: 'Dancing Script',      cssValue: "'Dancing Script', cursive",      category: 'handwriting' },
  { family: 'Pacifico',            cssValue: "'Pacifico', cursive",            category: 'handwriting' },
  { family: 'Great Vibes',         cssValue: "'Great Vibes', cursive",         category: 'handwriting' },
  { family: 'Sacramento',          cssValue: "'Sacramento', cursive",          category: 'handwriting' },
  { family: 'Pinyon Script',       cssValue: "'Pinyon Script', cursive",       category: 'handwriting' },
  { family: 'Alex Brush',          cssValue: "'Alex Brush', cursive",          category: 'handwriting' },
  { family: 'Kaushan Script',      cssValue: "'Kaushan Script', cursive",      category: 'handwriting' },
  { family: 'Lobster',             cssValue: "'Lobster', cursive",             category: 'handwriting' },
  { family: 'Satisfy',             cssValue: "'Satisfy', cursive",             category: 'handwriting' },
  { family: 'Parisienne',          cssValue: "'Parisienne', cursive",          category: 'handwriting' },

  // ── Monospace ──────────────────────────────────────────────────────────────
  { family: 'JetBrains Mono',      cssValue: "'JetBrains Mono', 'Courier New', monospace",  category: 'monospace' },
  { family: 'Fira Code',           cssValue: "'Fira Code', 'Courier New', monospace",        category: 'monospace' },
  { family: 'IBM Plex Mono',       cssValue: "'IBM Plex Mono', 'Courier New', monospace",    category: 'monospace' },
  { family: 'Space Mono',          cssValue: "'Space Mono', 'Courier New', monospace",       category: 'monospace' },
  { family: 'Roboto Mono',         cssValue: "'Roboto Mono', 'Courier New', monospace",      category: 'monospace' },
];

/**
 * Finds a FontOption by its CSS value string.
 * Returns undefined if not found in the list.
 */
export function findFontByCssValue(cssValue: string): FontOption | undefined {
  return ALL_FONTS.find((f) => f.cssValue === cssValue);
}

/** Default display font CSS value. */
export const DEFAULT_FONT_DISPLAY = "'Playfair Display', Georgia, serif";

/** Default body font CSS value. */
export const DEFAULT_FONT_BODY = "'DM Sans', -apple-system, sans-serif";

// Legacy aliases kept so CardSection/Sidebar <select> code compiles while migrating.
// These are only used transiently; both components will switch to FontCombobox.
/** @deprecated Use ALL_FONTS with FontCombobox instead. */
export const DISPLAY_FONTS = ALL_FONTS.map((f) => ({ value: f.cssValue, label: f.family }));
/** @deprecated Use ALL_FONTS with FontCombobox instead. */
export const BODY_FONTS = ALL_FONTS.map((f) => ({ value: f.cssValue, label: f.family }));
