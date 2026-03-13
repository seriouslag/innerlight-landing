import type { CardConfig } from '../../types';
import { ContactLines } from '../ContactInfo';

/** "The Bold Split" -- Half navy, half amber front with hexagon, cream back with services strip. */
export function Card3({ config }: { config: CardConfig }) {
  return (
    <div className="card-pair">
      <div className="card-wrapper">
        <div className="card-face-label">Front</div>
        <div className="card card-3-front">
          <div className="left-half">
            <div className="brand-name">
              inner
              <br />
              light
            </div>
            <div className="tagline">{config.taglineAlt}</div>
          </div>
          <div className="right-half">
            <svg viewBox="0 0 100 100" fill="none">
              <polygon
                points="50,8 90,30 90,70 50,92 10,70 10,30"
                stroke="#1a2068"
                strokeWidth="2.5"
                fill="none"
              />
              <path
                d="M58,24 C68,28 74,38 74,50 C74,58 70,65 64,70 L64,80 L40,80 L40,70 C34,65 30,58 30,50 C30,36 40,24 54,24 Z"
                stroke="#1a2068"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <polygon
                points="50,36 62,43 62,57 50,64 38,57 38,43"
                fill="#1a2068"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-face-label">Back</div>
        <div className="card card-3-back">
          <div className="left-info">
            <div className="person-name">{config.name}</div>
            <div className="person-title">{config.title}</div>
            <ContactLines config={config} />
          </div>
          <div className="right-accent" />
          <div className="services-strip">
            {config.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
