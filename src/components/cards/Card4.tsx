import type { CardConfig } from '../../types';
import { HexagonIcon } from '../HexagonIcon';
import { ContactRows } from '../ContactInfo';

/** "The Luminary" -- Dark navy front with amber glow and centered icon, dark back with contact rows. */
export function Card4({ config }: { config: CardConfig }) {
  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-4-front">
          <HexagonIcon className="glow-icon" />
          <div className="brand-name">{config.brandName}</div>
          <div className="tagline">{config.tagline}</div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-4-back">
          <div className="person-name">{config.name}</div>
          <div className="person-title">{config.title}</div>
          <div className="amber-divider" />
          <ContactRows config={config} className="contact-stack" />
          <div className="corner-icon">
            <svg viewBox="0 0 100 100" fill="none">
              <polygon
                points="50,8 90,30 90,70 50,92 10,70 10,30"
                stroke="#f5f1eb"
                strokeWidth="2"
                fill="none"
              />
              <polygon
                points="50,36 62,43 62,57 50,64 38,57 38,43"
                fill="#f5f1eb"
                opacity="0.15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
