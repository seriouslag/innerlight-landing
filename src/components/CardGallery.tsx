import type { CardConfig, CardColorOverride, CardFontOverride } from '../types';
import { CardSection } from './CardSection';
import { Card1 } from './cards/Card1';
import { Card2 } from './cards/Card2';
import { Card3 } from './cards/Card3';
import { Card4 } from './cards/Card4';
import { Card5 } from './cards/Card5';
import { Card6 } from './cards/Card6';
import { Card7 } from './cards/Card7';
import { Card8 } from './cards/Card8';
import { Card9 } from './cards/Card9';
import { Card10 } from './cards/Card10';
import { Card11 } from './cards/Card11';
import { Card12 } from './cards/Card12';
import { Card13 } from './cards/Card13';

/** Which color slots are editable for each design (1-based index). */
const editableColors: Record<number, Array<keyof CardColorOverride>> = {
  1: ['navy', 'amber', 'cream'],
  2: ['navy', 'amber', 'cream'],
  3: ['navy', 'amber', 'cream'],
  4: ['navy', 'amber', 'cream'],
  5: ['navy', 'amber', 'cream'],
  6: ['navy', 'amber', 'cream'],
  7: ['amber', 'cream'],
  8: ['navy', 'amber', 'cream'],
  9: ['amber', 'cream'],
  10: ['navy', 'amber', 'cream'],
  11: ['navy', 'amber', 'cream'],
  12: ['navy', 'amber', 'cream'],
  13: ['navy', 'amber', 'cream'],
};

/** Custom picker labels for designs where the three colors play different roles. */
const colorLabels: Record<number, Partial<Record<keyof CardColorOverride, string>>> = {
  10: { navy: 'Dark', amber: 'Accent', cream: 'Canvas' },
  11: { navy: 'Dark', amber: 'Accent', cream: 'Canvas' },
  12: { navy: 'Dark', amber: 'Accent', cream: 'Canvas' },
  13: { navy: 'Dark', amber: 'Accent', cream: 'Canvas' },
};

const designs = [
  { title: 'The Classic', description: 'Navy front with amber accent stripe. Refined and authoritative.', Card: Card1 },
  { title: 'The Minimal', description: 'All cream, icon-centered. Whisper-quiet confidence.', Card: Card2 },
  { title: 'The Bold Split', description: 'Diagonal amber panel creates energy and forward motion.', Card: Card3 },
  { title: 'The Luminary', description: 'Dark card with ambient amber glow. Pure brand essence.', Card: Card4 },
  { title: 'The Editorial', description: 'Bold serif headline with vertical amber line accent.', Card: Card5 },
  { title: 'The Headline', description: 'Text-dominant with massive serif. The tagline IS the card.', Card: Card6 },
  { title: 'The Spectrum', description: 'Dark card with actual Innerlight logo. Cosmic energy.', Card: Card7 },
  { title: 'The Luminary Bar', description: 'Compact dark card with services bar on the back.', Card: Card8 },
  { title: 'The Spectrum Bar', description: 'Logo version with services bar. Bold and informative.', Card: Card9 },
  { title: 'The Luminary Bar \u2014 Warm', description: 'Sand canvas with white ambient glow. Textured and grounded.', Card: Card10 },
  { title: 'The Spectrum Bar \u2014 Warm', description: 'Logo on warm sand canvas. Bright and airy.', Card: Card11 },
  { title: 'The Luminary Bar \u2014 Lemon Glow', description: 'Soft yellow canvas with white ambient glow. Sunny and inviting.', Card: Card12 },
  { title: 'The Spectrum Bar \u2014 Lemon Glow', description: 'Logo on soft yellow canvas. Sunny and luminous.', Card: Card13 },
];

interface CardGalleryProps {
  config: CardConfig;
  onChange: (config: CardConfig) => void;
}

/** Renders all 13 card designs in a scrollable gallery. */
export function CardGallery({ config, onChange }: CardGalleryProps) {
  function handleColorOverride(designNumber: number, override: CardColorOverride | undefined) {
    const next = { ...config.cardOverrides };
    if (override === undefined) {
      delete next[designNumber];
    } else {
      next[designNumber] = override;
    }
    onChange({ ...config, cardOverrides: next });
  }

  function handleFontOverride(designNumber: number, override: CardFontOverride | undefined) {
    const next = { ...config.fontOverrides };
    if (override === undefined) {
      delete next[designNumber];
    } else {
      next[designNumber] = override;
    }
    onChange({ ...config, fontOverrides: next });
  }

  return (
    <div className="gallery">
      <header className="page-header">
        <h1>
          Business <span className="amber">Card</span> Designs
        </h1>
        <p>
          Thirteen directions for Innerlight business cards. Each uses your
          brand palette with a different personality.
        </p>
      </header>

      {designs.map((design, i) => (
        <div key={i}>
          {i > 0 && (
            <div className="section-separator">
              <hr />
            </div>
          )}
          <CardSection
            designNumber={i + 1}
            title={design.title}
            description={design.description}
            CardComponent={design.Card}
            config={config}
            onColorOverride={handleColorOverride}
            onFontOverride={handleFontOverride}
            editableColors={editableColors[i + 1] ?? ['navy', 'amber', 'cream']}
            colorLabels={colorLabels[i + 1] ?? {}}
          />
        </div>
      ))}

      <div style={{ height: '4rem' }} />
    </div>
  );
}
