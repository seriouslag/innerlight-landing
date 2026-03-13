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
}
