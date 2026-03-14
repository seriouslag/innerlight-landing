import type { CardConfig } from './types';
import { DEFAULT_FONT_DISPLAY, DEFAULT_FONT_BODY } from './utils/fonts';

export const defaultConfig: CardConfig = {
  brandName: 'innerlight',
  tagline: 'You bring the light',
  taglineAlt: 'Stay human. Scale digital.',
  services: ['Websites', 'E-Comm', 'Payments', 'Media', 'AI', 'Leads'],

  name: 'Landon Gavin',
  title: 'Founder',

  phone: '(502) 901-2633',
  email: 'landon@innerlight.dev',
  website: 'innerlight.dev',
  location: 'Louisville, KY',

  navy: '#1a2068',
  amber: '#e8991c',
  cream: '#f5f1eb',

  fontDisplay: DEFAULT_FONT_DISPLAY,
  fontBody: DEFAULT_FONT_BODY,
  fontOverrides: {},

  cardOverrides: {
    10: { navy: '#3a3560', amber: '#8a7560', cream: '#ecdcc6' },
    11: { navy: '#3a3560', amber: '#8a7560', cream: '#ecdcc6' },
    12: { navy: '#3a3560', amber: '#8a8050', cream: '#f5f0d0' },
    13: { navy: '#3a3560', amber: '#8a8050', cream: '#f5f0d0' },
  },
};
