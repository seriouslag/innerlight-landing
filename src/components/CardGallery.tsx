import type { CardConfig } from '../types';
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
}

/** Renders all 13 card designs in a scrollable gallery. */
export function CardGallery({ config }: CardGalleryProps) {
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
          />
        </div>
      ))}

      <div style={{ height: '4rem' }} />
    </div>
  );
}
