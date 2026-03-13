import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import type { CardConfig } from '../../types';

interface Card13Props {
  config: CardConfig;
}

/** The Spectrum Bar -- Lemon Glow front with logo image, contact back with corner logo watermark. */
export function Card13({ config }: Card13Props) {
  const services = config.services.join(' \u00b7 ');

  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-13-front">
          <img
            className="logo-img"
            src="/InnerlightLogo.png"
            alt="Innerlight"
          />
          <div className="brand-name">{config.brandName}</div>
          <div className="tagline">
            {config.tagline} <span>{config.taglineAlt}</span>
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-13-back">
          <img
            className="corner-logo"
            src="/InnerlightLogo.png"
            alt="Innerlight"
          />
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
