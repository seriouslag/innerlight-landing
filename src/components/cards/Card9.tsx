import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import type { CardConfig } from '../../types';

interface Card9Props {
  config: CardConfig;
}

/** The Spectrum Bar -- dark gradient front with logo image, contact back with corner logo watermark. */
export function Card9({ config }: Card9Props) {
  const services = config.services.join(' \u00b7 ');

  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-9-front">
          <div className="card-main">
            <img
              className="logo-img"
              src="/InnerlightLogo.png"
              alt="Innerlight"
            />
            <div className="brand-name">{config.brandName}</div>
            <div className="tagline">{config.tagline}</div>
          </div>
          <div className="bottom-bar" />
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-9-back">
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
