import type { CardConfig } from '../../types';
import { ContactRows } from '../ContactInfo';

/** "The Spectrum" -- Dark gradient front with logo PNG and colorful glow, gradient back with spectrum divider. */
export function Card7({ config }: { config: CardConfig }) {
  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-7-front">
          <img
            className="logo-img"
            src="/InnerlightLogo.png"
            alt={`${config.brandName} logo`}
          />
          <div className="brand-name">{config.brandName}</div>
          <div className="tagline">
            {config.tagline} <span>{config.taglineAlt}</span>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-7-back">
          <div className="person-name">{config.name}</div>
          <div className="person-title">{config.title}</div>
          <div className="spectrum-divider" />
          <ContactRows config={config} className="contact-stack" />
          <img
            className="corner-logo"
            src="/InnerlightLogo.png"
            alt={`${config.brandName} logo`}
          />
        </div>
      </div>
    </div>
  );
}
