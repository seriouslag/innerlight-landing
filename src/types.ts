/** Per-card color overrides. Any omitted key falls back to the global value. */
export interface CardColorOverride {
  navy?: string;
  amber?: string;
  cream?: string;
}

/** Per-card font overrides. Any omitted key falls back to the global value. */
export interface CardFontOverride {
  /** CSS font-family value for display/heading text */
  fontDisplay?: string;
  /** CSS font-family value for body/contact text */
  fontBody?: string;
}

export interface CardConfig {
  /** Brand name displayed on cards */
  brandName: string;
  /** Primary tagline */
  tagline: string;
  /** Alternate tagline used on some designs */
  taglineAlt: string;
  /** Services listed on card backs */
  services: string[];

  /** Person's full name */
  name: string;
  /** Person's job title */
  title: string;

  /** Phone number */
  phone: string;
  /** Email address */
  email: string;
  /** Website URL (without protocol) */
  website: string;
  /** City, State */
  location: string;

  /** Primary dark color */
  navy: string;
  /** Accent color */
  amber: string;
  /** Light background color */
  cream: string;

  /** Per-card color overrides keyed by 1-based design number */
  cardOverrides: Record<number, CardColorOverride>;

  /** CSS font-family value for display/heading text across all cards */
  fontDisplay: string;
  /** CSS font-family value for body/contact text across all cards */
  fontBody: string;

  /** Per-card font overrides keyed by 1-based design number */
  fontOverrides: Record<number, CardFontOverride>;
}
