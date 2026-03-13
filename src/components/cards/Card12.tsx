import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import type { CardConfig } from '../../types';
import { HexagonIcon } from '../HexagonIcon';

interface Card12Props {
  config: CardConfig;
}

/** The Luminary Bar -- Lemon Glow front with hexagon icon, contact back with corner hexagon watermark. */
export function Card12({ config }: Card12Props) {
  const services = config.services.join(' \u00b7 ');

  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-12-front">
          <HexagonIcon className="glow-icon" />
          <div className="brand-name">{config.brandName}</div>
          <div className="tagline">{config.tagline}</div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-12-back">
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
              />
            </svg>
          </div>
          <div className="card-main">
            <div className="person-name">{config.name}</div>
            <div className="person-title">{config.title}</div>
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
              <div className="contact-row">
                <MapPin />
                <span>{config.location}</span>
              </div>
            </div>
          </div>
          <div className="bottom-bar">
            <span className="brand-small">{config.brandName}</span>
            <span className="services-text">{services}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
