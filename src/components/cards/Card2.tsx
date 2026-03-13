import type { CardConfig } from '../../types';
import { Phone, Mail, Globe } from 'lucide-react';
import { HexagonIcon } from '../HexagonIcon';

/** "The Minimal" -- Cream centered front with icon and tagline, cream back with 3 contact rows (no location). */
export function Card2({ config }: { config: CardConfig }) {
  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-2-front">
          <HexagonIcon className="center-icon" headColor="#1a2068" />
          <div className="brand-name">{config.brandName}</div>
          <div className="brand-tagline">{config.taglineAlt}</div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-2-back">
          <div className="person-name">{config.name}</div>
          <div className="person-title">{config.title}</div>
          <div className="divider" />
          <div className="contact-stack">
            <div className="contact-row">
              <Phone />
              <span>{config.phone}</span>
            </div>
            <div className="contact-row">
              <Mail />
              <span>{config.email}</span>
            </div>
            <div className="contact-row">
              <Globe />
              <span>{config.website}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
